from django_filters import rest_framework as filters
from .models import ToDo, Project


class ProjectFilters(filters.FilterSet):
    project_name = filters.CharFilter(lookup_expr='contains')

    class Meta:
        model = Project
        fields = ['project_name']
