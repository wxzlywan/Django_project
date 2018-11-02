from django.db import models

# Create your models here.

class lbtx1(models.Model):
    img = models.CharField(max_length=100)
    shop = models.CharField(max_length=100)
    price = models.CharField(max_length=20)


class lbty(models.Model):
    img = models.CharField(max_length=100)

class warpy(models.Model):
    img = models.CharField(max_length=100)

class goodsDetail(models.Model):
    img =models.CharField(max_length=100)
    shop = models.CharField(max_length=100)
    price = models.CharField(max_length=20)
    old_price = models.CharField(max_length=20)
    discount = models.CharField(max_length=20)
    cart = models.CharField(max_length=20)

class goods_img(models.Model):
    big_img1 = models.CharField(max_length=100)
    big_img2 = models.CharField(max_length=100)
    small_img1 = models.CharField(max_length=100)
    small_img2 = models.CharField(max_length=100)
    small_img3 = models.CharField(max_length=100)

    s_img = models.OneToOneField('goodsDetail')


class UserInfo(models.Model):
    username = models.CharField(max_length=60)
    password = models.CharField(max_length=256)
    portrait = models.CharField(max_length=256)
    token = models.CharField(max_length=256)

