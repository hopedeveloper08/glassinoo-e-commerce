from django.contrib import admin

import jdatetime

from .models import Order, OrderItem


class OrderItemInline(admin.StackedInline):
    model = OrderItem
    fields = [
        'talq_type', 'table_type', 'table_material', 'shape',
        'thickness', 'length', 'width', 'price'
    ]
    extra = 0


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'phone', 'post_method', 'shamsi_created_at']
    list_display_links = ['id', 'name']
    search_fields = ['name']  
    inlines = [OrderItemInline]
    readonly_fields = ['shamsi_created_at']

    fieldsets = (
        ('اطلاعات مشتری', {
            'fields': ['name', 'phone', 'address', 'post_method'],
        }),
        ('اطلاعات سفارش', {
            'fields': ['total_price', 'shamsi_created_at'],
        }),
    )
        