from rest_framework.serializers import HyperlinkedModelSerializer
from .models import ToDo, Project
from users.serializers import UserModelSerializer


class ProjectModelSerializer(HyperlinkedModelSerializer):
    project_user_creator = UserModelSerializer()

    class Meta:
        model = Project
        fields = '__all__'


class ToDoModelSerializer(HyperlinkedModelSerializer):
    user_creator = UserModelSerializer()

    class Meta:
        model = ToDo
        fields = '__all__'
