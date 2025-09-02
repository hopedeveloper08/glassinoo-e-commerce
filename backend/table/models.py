from django.db import models


class TableType(models.Model):
    title = models.CharField(max_length=255, verbose_name='عنوان')

    class Meta:
        verbose_name = 'نوع میز'
        verbose_name_plural = 'نوع میز'

    def __str__(self):
        return self.title
    
    @classmethod
    def get_tables_list(cls, request):
        tables = cls.objects.all()
        return [
            {
                'id': table.id,
                'title': table.title,
                'image_urls': [
                    request.build_absolute_uri(x.image.url)
                    for x in TableTypeImage.objects.filter(table=table)
                ],
            }
            for table in tables
        ]


class TableTypeImage(models.Model):
    table = models.ForeignKey(TableType, on_delete=models.CASCADE, verbose_name='عنوان میز')
    image = models.ImageField(upload_to='table_type_image/')

    class Meta:
        verbose_name = 'عکس نوع میز'
        verbose_name_plural = 'عکس نوع میز'
    
    def __str__(self):
        return f"عکس برای نوع میز {self.table.title}"


class TableMaterial(models.Model):
    title = models.CharField(max_length=255, verbose_name='عنوان')

    class Meta:
        verbose_name = 'جنس میز'
        verbose_name_plural = 'جنس میز'

    def __str__(self):
        return self.title
    
    @classmethod
    def get_tables_list(cls, request):
        tables = cls.objects.all()
        return [
            {
                'id': table.id,
                'title': table.title,
                'image_urls': [
                    request.build_absolute_uri(x.image.url)
                    for x in TableMaterialImage.objects.filter(table=table)
                ],
            }
            for table in tables
        ]


class TableMaterialImage(models.Model):
    table = models.ForeignKey(TableMaterial, on_delete=models.CASCADE, verbose_name='عنوان میز')
    image = models.ImageField(upload_to='table_material_image/')

    class Meta:
        verbose_name = 'عکس جنس میز'
        verbose_name_plural = 'عکس جنس میز'
    
    def __str__(self):
        return f"عکس برای جنس میز {self.table.title}"
    