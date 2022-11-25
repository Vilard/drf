from django.db import models
from uuid import uuid4
from users.models import User


class Project(models.Model):
    project_id = models.UUIDField(primary_key=True, default=uuid4)
    project_name = models.CharField(max_length=64)
    project_url = models.CharField(max_length=256)
    project_user_creator = models.ForeignKey(User, models.PROTECT)


class ToDo(models.Model):
    ToDo = models.CharField(max_length=512)
    create_data = models.DateTimeField(verbose_name='create_date',
                                       auto_now_add=True)
    update_date = models.DateTimeField(verbose_name='update_date',
                                       auto_now=True)
    user_creator = models.ForeignKey(User, models.PROTECT)
    active = models.BooleanField()
    project = models.ForeignKey(Project, models.PROTECT)
