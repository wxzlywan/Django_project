import hashlib
import re
import uuid

from django.shortcuts import render, redirect
from django.http import JsonResponse, HttpResponse

from app.models import lbtx1, lbty, warpy, goodsDetail, UserInfo


# Create your views here.
def index(request):
    # 获取token

    token = request.session.get('token')
    if token:
        userInfo = UserInfo.objects.get(token=token)[0]




    # 新品推荐(女)
    lbtx1_list1 = lbtx1.objects.filter(pk=1)
    lbtx1_list2 = lbtx1.objects.filter(pk__gt=1,pk__lt=8)
    lbtx1_list3 = lbtx1.objects.filter(pk=8)
    lbtx1_list4 = lbtx1.objects.filter(pk__gt=8, pk__lt=15)
    lbtx1_list5 = lbtx1.objects.filter(pk=15)
    lbtx1_list6 = lbtx1.objects.filter(pk__gt=15, pk__lt=22)
    lbtx1_list7 = lbtx1.objects.filter(pk=22)
    lbtx1_list8 = lbtx1.objects.filter(pk__gt=22, pk__lt=29)
    # 新品推荐(男)
    lbtx1_list9 = lbtx1.objects.filter(pk=29)
    lbtx1_list10 = lbtx1.objects.filter(pk__gt=29, pk__lt=36)
    lbtx1_list11 = lbtx1.objects.filter(pk=36)
    lbtx1_list12 = lbtx1.objects.filter(pk__gt=36, pk__lt=43)
    lbtx1_list13 = lbtx1.objects.filter(pk=43)
    lbtx1_list14 = lbtx1.objects.filter(pk__gt=43, pk__lt=50)
    lbtx1_list15 = lbtx1.objects.filter(pk=50)
    lbtx1_list16 = lbtx1.objects.filter(pk__gt=50, pk__lt=57)
    # 新品推荐(儿童)
    lbtx1_list17 = lbtx1.objects.filter(pk=57)
    lbtx1_list18 = lbtx1.objects.filter(pk__gt=57, pk__lt=64)
    lbtx1_list19 = lbtx1.objects.filter(pk=64)
    lbtx1_list20 = lbtx1.objects.filter(pk__gt=64, pk__lt=71)
    lbtx1_list21 = lbtx1.objects.filter(pk=71)
    lbtx1_list22 = lbtx1.objects.filter(pk__gt=71, pk__lt=78)
    lbtx1_list23 = lbtx1.objects.filter(pk=78)
    lbtx1_list24 = lbtx1.objects.filter(pk__gt=78, pk__lt=85)

    # 品牌折扣导航栏
    brandFirst = warpy.objects.first()
    brands = warpy.objects.all()
    brandsList = []
    for brand in brands:
        brandsList.append(brand.img)

    # 品牌折扣信息
    goods = lbty.objects.all()
    goodsList = []
    for good in goods:
        goodsList.append(good.img)

    # 限时特卖及详情页数据
    goodsdetail = goodsDetail.objects.all()



    data={
        'data1': lbtx1_list1,
        'data2': lbtx1_list2,
        'data3': lbtx1_list3,
        'data4': lbtx1_list4,
        'data5': lbtx1_list5,
        'data6': lbtx1_list6,
        'data7': lbtx1_list7,
        'data8': lbtx1_list8,
        'data9': lbtx1_list9,
        'data10': lbtx1_list10,
        'data11': lbtx1_list11,
        'data12': lbtx1_list12,
        'data13': lbtx1_list13,
        'data14': lbtx1_list14,
        'data15': lbtx1_list15,
        'data16': lbtx1_list16,
        'data17': lbtx1_list17,
        'data18': lbtx1_list18,
        'data19': lbtx1_list19,
        'data20': lbtx1_list20,
        'data21': lbtx1_list21,
        'data22': lbtx1_list22,
        'data23': lbtx1_list23,
        'data24': lbtx1_list24,
        'brandFirst':brandFirst,
        'brandsList': brandsList,
        'goodsList':goodsList,
        'goodsdetail':goodsdetail,

        'userInfo': userInfo,
    }

    return render(request, 'index.html', data)


# 密码加密
def password_encrypt(password):
    sha = hashlib.sha224()
    sha.update(password.encode('utf-8'))
    return sha.hexdigest()


# 注册
def register(request):
    if request.method == 'GET':
        return render(request, 'register.html')
    elif request.method == 'POST':
        user = UserInfo()
        user.username = request.POST.get('username')
        user.password = password_encrypt(request.POST.get('password'))


        # 生成token
        user.token = str(uuid.uuid5(uuid.uuid4(), 'register'))

        # 数据保存
        user.save()

        # 生成session
        request.session['token'] = user.token

        return redirect('app:index')

# 用户名验证
def userinfocheck(request):
    username = request.GET.get('username')  # 获取用户输入的用户名

    if username == '':
        return JsonResponse({'msg':'用户名不可以为空！', 'statusid': '0'})
    else:
        try:
            userinfo = UserInfo.objects.get(username=username)
            return JsonResponse({'msg':'用户名已存在！', 'statusid': '-1'})
        except:
            if len(username)<5 or len(username)>60:
                return JsonResponse({'msg': '用户名长度需要为6~50位字符', 'statusid': '-2'})
            elif re.search(r'[^a-zA-Z0-9_]+', username):
                return JsonResponse({'msg':'只支持英文字母、数字及“_”组合', 'statusid': '-3'})
            else:
                return JsonResponse({'msg':'用户名可以使用！', 'statusid': '1'})





def login(request):

    return render(request, 'login.html')


def cart(request):
    return render(request, 'cart.html')



# 详情页
def detail(request, shop_id):
    shop_id = int(shop_id)
    goods = goodsDetail.objects.get(pk=shop_id)
    return render(request, 'detail.html', {'goods':goods})




