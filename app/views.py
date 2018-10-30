from django.shortcuts import render
from django.http import JsonResponse

from app.models import lbtx1,lbty,warpy
# Create your views here.
def index(request):
    lbtx1_list1 = lbtx1.objects.filter(pk=1)
    lbtx1_list2 = lbtx1.objects.filter(pk__gt=1,pk__lt=8)
    lbtx1_list3 = lbtx1.objects.filter(pk=8)
    lbtx1_list4 = lbtx1.objects.filter(pk__gt=8, pk__lt=15)
    lbtx1_list5 = lbtx1.objects.filter(pk=15)
    lbtx1_list6 = lbtx1.objects.filter(pk__gt=15, pk__lt=22)
    lbtx1_list7 = lbtx1.objects.filter(pk=22)
    lbtx1_list8 = lbtx1.objects.filter(pk__gt=22, pk__lt=29)
    lbtx1_list9 = lbtx1.objects.filter(pk=29)
    lbtx1_list10 = lbtx1.objects.filter(pk__gt=29, pk__lt=36)
    lbtx1_list11 = lbtx1.objects.filter(pk=36)
    lbtx1_list12 = lbtx1.objects.filter(pk__gt=36, pk__lt=43)
    lbtx1_list13 = lbtx1.objects.filter(pk=43)
    lbtx1_list14 = lbtx1.objects.filter(pk__gt=43, pk__lt=50)
    lbtx1_list15 = lbtx1.objects.filter(pk=50)
    lbtx1_list16 = lbtx1.objects.filter(pk__gt=50, pk__lt=57)
    lbtx1_list17 = lbtx1.objects.filter(pk=57)
    lbtx1_list18 = lbtx1.objects.filter(pk__gt=57, pk__lt=64)
    lbtx1_list19 = lbtx1.objects.filter(pk=64)
    lbtx1_list20 = lbtx1.objects.filter(pk__gt=64, pk__lt=71)
    lbtx1_list21 = lbtx1.objects.filter(pk=71)
    lbtx1_list22 = lbtx1.objects.filter(pk__gt=71, pk__lt=78)
    lbtx1_list23 = lbtx1.objects.filter(pk=78)
    lbtx1_list24 = lbtx1.objects.filter(pk__gt=78, pk__lt=85)
    return render(request, 'index.html', {'data1': lbtx1_list1, 'data2': lbtx1_list2, 'data3': lbtx1_list3, 'data4': lbtx1_list4, 'data5': lbtx1_list5, 'data6': lbtx1_list6, 'data7': lbtx1_list7, 'data8': lbtx1_list8, 'data9': lbtx1_list9, 'data10': lbtx1_list10,'data11': lbtx1_list11,'data12': lbtx1_list12,'data13': lbtx1_list13,'data14': lbtx1_list14,'data15': lbtx1_list15,'data16': lbtx1_list16, 'data17': lbtx1_list17, 'data18': lbtx1_list18,'data19': lbtx1_list19,'data20': lbtx1_list20,'data21': lbtx1_list21,'data22': lbtx1_list22,'data23': lbtx1_list23,'data24': lbtx1_list24})

def lbty(request):
    brands = lbty.objects.all()
    brands_list = []
    for brand in brands:
        brands_list.append(brand.img)
    return render(request, 'test.html', {'brands': brands_list})

def warpy(request):
    good_one = warpy.objects.first()
    goods_list = warpy.objects.all()
    return render(request, 'index.html', {'goods': goods_list, 'good_one': good_one})


def login(request):
    return render(request, 'login.html')


def register(request):
    return render(request, 'register.html')


def cart(request):
    return render(request, 'cart.html')


def detail(request):
    return render(request, 'detail.html')