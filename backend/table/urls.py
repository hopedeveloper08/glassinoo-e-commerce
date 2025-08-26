from django.urls import path

from . import views


urlpatterns = [
    path('type/', views.get_tables_type),   
    path('material/', views.get_tables_material),   
]
