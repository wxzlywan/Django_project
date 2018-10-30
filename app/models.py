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