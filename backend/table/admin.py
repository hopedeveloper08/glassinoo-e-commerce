from django.contrib import admin

from .models import TableType, TableTypeImage, TableMaterial, TableMaterialImage


class TableTypeImageInline(admin.TabularInline):
    model = TableTypeImage
    fields = ['image']
    extra = 1
    
    
@admin.register(TableType)
class TableTypeAdmin(admin.ModelAdmin):
    list_display = ['title']
    list_display_links = ['title']
    search_fields = ['title']
    inlines = [TableTypeImageInline]
    

class TableMaterialImageInline(admin.TabularInline):
    model = TableMaterialImage
    fields = ['image']
    extra = 1
    
    
@admin.register(TableMaterial)
class TableMaterialAdmin(admin.ModelAdmin):
    list_display = ['title']
    list_display_links = ['title']
    search_fields = ['title']
    inlines = [TableMaterialImageInline]
