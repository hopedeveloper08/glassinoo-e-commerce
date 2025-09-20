from django.db import models

import jdatetime


class Order(models.Model):
    POST_CHOICES = [
        (0, 'به شیراز'),
        (1, 'به شهر دیگر'),
        (2, 'درب فروشگاه'),
    ]

    name = models.CharField(max_length=255, verbose_name='نام مشتری')
    phone = models.CharField(max_length=20, verbose_name='شماره تماس')
    address = models.TextField(verbose_name='آدرس')
    lng = models.FloatField(verbose_name='طول جغرافیایی')
    lat = models.FloatField(verbose_name='عرض جغرافیایی')
    post_method = models.SmallIntegerField(choices=POST_CHOICES, verbose_name='روش ارسال')
    total_price = models.PositiveIntegerField(verbose_name='مبلغ کل')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='زمان ایجاد')
    authority = models.CharField(max_length=255, verbose_name='کد پرداخت')

    def __str__(self):
        return f"سفارش #{self.id} - {self.name}"
    
    class Meta:
        verbose_name = 'سفارشات'
        verbose_name_plural = 'سفارشات'
        
    @property
    def shamsi_created_at(self):
        return jdatetime.datetime.fromgregorian(datetime=self.created_at).strftime('%Y/%m/%d %H:%M')
    shamsi_created_at.fget.short_description = 'زمان ایجاد'


class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE, verbose_name='سفارش مربوطه')
    table_type = models.CharField(max_length=255, verbose_name='نوع میز')
    table_material = models.CharField(max_length=255, verbose_name='جنس میز')
    talq_type = models.CharField(max_length=255, verbose_name='طلق')
    shape = models.CharField(max_length=255, verbose_name='شکل')
    thickness = models.FloatField(verbose_name='ضخامت')
    length = models.FloatField(verbose_name='طول')
    width = models.FloatField(verbose_name='عرض')
    price = models.PositiveIntegerField(verbose_name='قیمت')

    def __str__(self):
        return f"آیتم #{self.id} - سفارش #{self.order.id}"

    class Meta:
        verbose_name = 'آیتم سفارش'
        verbose_name_plural = 'آیتم سفارش' 


class OrderItemImage(models.Model):
    item = models.ForeignKey(OrderItem, related_name='images', on_delete=models.CASCADE, verbose_name='آیتم سفارش')
    image = models.ImageField(upload_to='order_images/', verbose_name='تصویر')

    def __str__(self):
        return f"عکس #{self.id} - آیتم #{self.item.id}"
    
    class Meta:
        verbose_name = 'عکس آیتم ها'
        verbose_name_plural = 'عکس آیتم ها'
    