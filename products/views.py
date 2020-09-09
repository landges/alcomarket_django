from django.shortcuts import render
from .models import *


# Create your views here.
def main_page(request):
    products = Product.objects.get(id=1)
    if products.viscky:
        print('dfghjk')
    return render(request, 'products/home_page.html')


def show_category(request, hierarchy=None):
    print(hierarchy)
    category_slug = hierarchy.split('/')
    category_queryset = list(Category.objects.all())
    all_slugs = [x.slug for x in category_queryset]
    parent = None
    for slug in category_slug:
        if slug in all_slugs:
            parent = Category.objects.get(slug=slug, parent=parent)
        else:
            instance=Product.objects.get(slug=slug)
            breadcrumbs_link, breadcrumbs_name = instance.get_cat_list()
            print(breadcrumbs_link,breadcrumbs_name)
            # category_name = [' '.join(i.split('/')[-1].split('-')) for i in breadcrumbs_link]
            breadcrumbs = zip(breadcrumbs_link, breadcrumbs_name)
            return render(request, f"products/product_detail_{instance.type_model}.html", {'product': instance, 'breadcrumbs': breadcrumbs})

    return render(request, "products/product_detail.html",
                  {'post_set': parent.post_set.all(), 'sub_categories': parent.children.all()})
