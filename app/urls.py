from django.conf.urls import url

from app import views

urlpatterns = [
    url(r'^$', views.index, name='index'),  # 主页

    url(r'^login/$', views.login, name='login'),    # 登录页

    url(r'^register/$', views.register, name='register'),   # 注册页

    url(r'^cart/$', views.cart, name='cart'),   # 购物车

    url(r'^detail/$', views.detail, name='detail'),  # 商品详细页

    url(r'^goodsinfo/$', views.goodsinfo, name='goodsinfo'),
]


