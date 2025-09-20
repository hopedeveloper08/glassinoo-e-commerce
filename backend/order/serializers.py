from rest_framework import serializers


class ImageSerializer(serializers.Serializer):
    name = serializers.CharField()
    type = serializers.CharField()
    data = serializers.CharField()
    
    
class CartSerializer(serializers.Serializer):
    tableType = serializers.CharField()
    tableMaterial = serializers.CharField()
    talqType = serializers.CharField()
    talqID = serializers.IntegerField()
    shape = serializers.CharField()
    thickness = serializers.FloatField()
    length = serializers.FloatField()
    width = serializers.FloatField()
    images = ImageSerializer(many=True)


class CustomerInfoSerializer(serializers.Serializer):
    name = serializers.CharField()
    phone = serializers.CharField()
    address = serializers.CharField(allow_blank=True)
    lng = serializers.FloatField()
    lat = serializers.FloatField()
    postMethod = serializers.IntegerField()


class PaymentInitiateSerializer(serializers.Serializer):
    customerInfo = CustomerInfoSerializer()
    cart = CartSerializer(many=True)
    