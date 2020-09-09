from django.db import models
from django.shortcuts import reverse


# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField()
    parent = models.ForeignKey('self', blank=True, null=True, related_name='children', on_delete=models.CASCADE)

    class Meta:
        unique_together = ('slug', 'parent',)
        verbose_name_plural = "categories"

    def __str__(self):
        full_path = [self.name]
        k = self.parent
        while k is not None:
            full_path.append(k.name)
            k = k.parent
        return ' -> '.join(full_path[::-1])


class Country(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField()
    image = models.ImageField(upload_to='country/')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Страна производитель"
        verbose_name_plural = "Страны"


class Product(models.Model):
    name = models.CharField(max_length=250)
    slug = models.SlugField()
    type_model = models.CharField(max_length=20, default='Wine', blank=True, null=True)
    category = models.ForeignKey(Category, blank=True, null=True, on_delete=models.CASCADE)
    price = models.IntegerField()
    article = models.IntegerField()
    country = models.ForeignKey(Country, blank=True, null=True, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='product/',blank=True,null=True)
    extra = models.JSONField()
    dsc = models.TextField(blank=True, null=True)
    color = models.CharField(max_length=100, blank=True, null=True)
    percent = models.FloatField(blank=True,null=True)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('product_detail', kwargs={'category': self.category.name, "slug": self.slug})

    def get_cat_list(self):
        k = self.category  # for now ignore this instance method

        breadcrumb = ["dummy"]
        breadcrumb_name=[]
        breadcrumb_name.append(self.name)
        breadcrumb.append(self.slug)
        while k is not None:
            breadcrumb.append(k.slug)
            breadcrumb_name.append(k.name)
            k = k.parent

        for i in range(len(breadcrumb) - 1):
            breadcrumb[i] = '/'.join(breadcrumb[-1:i - 1:-1])
        return list(reversed(breadcrumb[1:])),list(reversed(breadcrumb_name))

    class Meta:
        ordering = ['price']
        verbose_name = "Товар"
        verbose_name_plural = "Товары"


class Wine(Product):
    grapes = models.CharField(max_length=200)
    aroma = models.TextField(blank=True, null=True)
    taste = models.CharField(max_length=200, blank=True, null=True)


class Viscky(Product):
    cupaj = models.TextField(blank=True, null=True)
    how_drink = models.TextField(blank=True, null=True)
