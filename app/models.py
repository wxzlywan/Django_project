from django.db import models

# Create your models here.

class goodsdetail(models.Model):
    img = models.CharField(max_length=100)
    shop = models.CharField(max_length=100)
    price = models.CharField(max_length=20)