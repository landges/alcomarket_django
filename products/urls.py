from django.conf.urls import url
from django.urls import path
from .views import *

urlpatterns = [
	path('',main_page,name='home'),
	url(r'^category/(?P<hierarchy>.+)/$', show_category, name='category'),
]