from django.contrib import admin
from .models import *


# Register your models here.
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug',)
    prepopulated_fields={'slug':('name',)}

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
	list_display=('id','name')
	prepopulated_fields={'slug':('name',)}

@admin.register(Wine)
class ProductAdmin(admin.ModelAdmin):
	list_display=('id','name')
	prepopulated_fields={'slug':('name',)}

@admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
	list_display=('id','name')
	prepopulated_fields={'slug':('name',)}

@admin.register(Viscky)
class VisckyAdmin(admin.ModelAdmin):
	list_display=('id','name')
	prepopulated_fields={'slug':('name',)}

