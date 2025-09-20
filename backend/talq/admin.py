from django.contrib import admin

from .models import TalqType, TalqTypeImage, Talq


class TalqTypeImageInline(admin.StackedInline):
    model = TalqTypeImage
    fields = ['image']
    extra = 0
    
    
@admin.register(TalqType)
class TalqTypeAdmin(admin.ModelAdmin):
    list_display = ['title']
    list_display_links = ['title']
    search_fields = ['title']
    inlines = [TalqTypeImageInline]


@admin.register(Talq)
class TalqAdmin(admin.ModelAdmin):
    list_display = ['talq_type', 'thickness', 'width', 'price']
    list_display_links = ['talq_type']
    search_fields = ['talq_type']
    list_editable = ['price']
    list_filter = ['talq_type', 'thickness', 'width']
    