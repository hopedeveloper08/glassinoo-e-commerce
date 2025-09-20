from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('ali/', admin.site.urls),

    path('api/tables/', include('table.urls')),
    path('api/talqs/', include('talq.urls')),
    path('api/order/', include('order.urls')),
] 

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
