from django.db import models


class User(models.Model):
    email = models.EmailField(max_length=254, unique=True)
    user_name = models.CharField(max_length=64)
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)