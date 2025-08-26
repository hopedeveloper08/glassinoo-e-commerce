from django.contrib import admin
from django.contrib.auth.models import Group, User

admin.site.site_header = "پنل مدیریت گلاسینو"
admin.site.site_title = "گلاسینو"
admin.site.index_title = "مدیریت سایت"

admin.site.unregister(User)
admin.site.unregister(Group)
