from django.contrib import admin

from .models import TalqType, TalqTypeImage


class TalqTypeImageInline(admin.TabularInline):
    model = TalqTypeImage
    fields = ['image']
    extra = 1
    
    
@admin.register(TalqType)
class TalqTypeAdmin(admin.ModelAdmin):
    list_display = ['title']
    list_display_links = ['title']
    search_fields = ['title']
    inlines = [TalqTypeImageInline]
