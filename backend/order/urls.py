from django.urls import path

from . import views


urlpatterns = [
    path('initiate_payment/', views.initiate_payment),
    path('verify_payment/', views.verify_payment),
]
