from django.urls import path

from . import views


urlpatterns = [
    path('type/', views.get_talqs_type)
]
