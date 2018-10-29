from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.
def index(request):
    return render(request, 'index.html')

def goodsinfo(request):
    aaa_list = open('../static/json/aaa.json', 'r', encoding='utf-8')
    data = aaa_list.read()
    return JsonResponse(data)



def login(request):
    return render(request, 'login.html')


def register(request):
    return render(request, 'register.html')


def cart(request):
    return render(request, 'cart.html')


def detail(request):
    return render(request, 'detail.html')