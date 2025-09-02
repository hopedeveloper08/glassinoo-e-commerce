from django.db import models

from table.models import TableMaterial


class TalqType(models.Model):
    title = models.CharField(max_length=64, verbose_name='نوع طلق')
    tables = models.ManyToManyField(TableMaterial, verbose_name='میز ها')
    
    class Meta:
        verbose_name = 'نوع طلق'
        verbose_name_plural = 'نوع طلق'

    def __str__(self):
        return f'{self.title}'

    @classmethod
    def get_talqs_by_table(cls, table_id, request):
        talqs_type = cls.objects.filter(tables__id=table_id)
        return [
            {
                'id': talq_type.id,
                'title': talq_type.title,
                'image_urls': [
                    request.build_absolute_uri(x.image.url)
                    for x in TalqTypeImage.objects.filter(talq_type=talq_type)
                ],
            }
            for talq_type in talqs_type
        ]
      

class TalqTypeImage(models.Model):
    talq_type = models.ForeignKey(TalqType, on_delete=models.CASCADE, verbose_name='نوع طلق')
    image = models.ImageField(upload_to='talq_image/', verbose_name='عکس')
    
    class Meta:
        verbose_name = 'عکس نوع طلق'
        verbose_name_plural = 'عکس نوع طلق'
    
    def __str__(self):
        return f"عکس برای طلق {self.talq_type.title}"
