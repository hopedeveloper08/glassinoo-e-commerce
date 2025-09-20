from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

import base64
from django.core.files.base import ContentFile

import os
from dotenv import load_dotenv
load_dotenv()

from zarinpal import ZarinPal
from utils.Config import Config

from .price_calculation import price_calculation
from .models import Order, OrderItem, OrderItemImage
from .serializers import PaymentInitiateSerializer

ZARINPAL = ZarinPal(Config(merchant_id=os.getenv('MERCHANT_ID'), sandbox=True))

@api_view(['POST'])
@permission_classes([AllowAny])
def initiate_payment(request):
    serializer = PaymentInitiateSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    customer_info = serializer.validated_data["customerInfo"]
    cart = serializer.validated_data["cart"]

    amount = 0
    for item in cart:
        item['price'] = price_calculation(item)
        amount += item['price']
        
    if customer_info['postMethod'] == 0:
        amount += 98_000

    order = Order.objects.create(
        name=customer_info['name'],
        authority='temp',
        phone=customer_info['phone'],
        address=customer_info['address'],
        lng=customer_info['lng'],
        lat=customer_info['lat'],
        post_method=customer_info['postMethod'],
        total_price=amount,
    )

    for item in cart:
        order_item = OrderItem.objects.create(
            order=order,
            price=item['price'],
            table_type=item['tableType'],
            table_material=item['tableMaterial'],
            talq_type=item['talqType'],
            shape=item['shape'],
            thickness=item['thickness'],
            length=item['length'],
            width=item['width'],
        )
        
        for img in item.get('images', []):
            format, imgstr = img['data'].split(';base64,')  
            ext = format.split('/')[-1]  
            data = ContentFile(base64.b64decode(imgstr), name=f"{img['name']}.{ext}")
            OrderItemImage.objects.create(item=order_item, image=data)

    response = ZARINPAL.payments.create({
        "amount": amount,
        "currency": 'IRT',
        "callback_url": f"{os.getenv('CALLBACK_URL')}?order_id={order.id}",
        "description": f"سفارش برای طلق",
    })

    if "data" in response and "authority" in response["data"]:
        url = ZARINPAL.payments.generate_payment_url(response["data"]["authority"])
        order.authority = response["data"]["authority"]
        order.save(update_fields=['authority'])
        return Response({'url': url}, status=200)

    order.delete()
    return Response({'error': "مشکلی در برقراری ارتباط با درگاه پرداخت به وجود آمد."}, status=500)


@api_view(['GET'])
@permission_classes([AllowAny])
def verify_payment(request):
    status = request.GET.get('status')
    authority = request.GET.get('authority')
    order_id = request.GET.get('order_id')

    if not all([status, authority, order_id]):
        return Response({'error': "پارامترهای ناقص"}, status=400)

    try:
        order = Order.objects.get(id=order_id, authority=authority)
    except Order.DoesNotExist:
        return Response({'error': "سفارش پیدا نشد"}, status=404)

    if status != "OK":
        order.delete()
        return Response({'success': False, 'message': "پرداخت ناموفق"})

    response = ZARINPAL.verifications.verify({
        "amount": float(order.total_price),
        "authority": authority,
    })

    if response["data"]["code"] in [100, 101]:
        return Response({'success': True, 'message': "پرداخت موفق"})
    else:
        order.delete()
        return Response({'success': False, 'message': "پرداخت ناموفق"})
    