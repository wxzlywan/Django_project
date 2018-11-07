from django.conf.urls import url

from app import views

urlpatterns = [
    url(r'^$', views.index, name='index'),  # 主页

    url(r'^login/$', views.login, name='login'),    # 登录页

    url(r'^register/$', views.register, name='register'),   # 注册页

    url(r'^logout/$', views.logout, name='logout'),

    url(r'^cart/$', views.cart, name='cart'),   # 购物车

    url(r'^detail/(\d+)/$', views.detail, name='detail'),  # 商品详细页

    url(r'^userinfocheck/$', views.userinfocheck, name='userinfocheck'),   # 验证用户名

    url(r'^codeVerify/$', views.codeVerify, name='codeVerify'),  # 生成验证码

    url(r'^codeVerifyCheck/$', views.codeVerifyCheck, name='codeVerifyCheck'), # 验证码验证

]


