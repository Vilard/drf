from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from authors.views import AuthorModelViewSet, BiographyModelViewSet, BookModelViewSet, ArticleModelViewSet
from users.views import UserModelViewSet, UserViewSet
from ToDo.views import ProjectModelViewSet, ToDoModelViewSet

router = DefaultRouter()
router.register('authors', AuthorModelViewSet)
router.register('biography', BiographyModelViewSet)
router.register('book', BookModelViewSet)
router.register('article', ArticleModelViewSet)
# router.register('users', UserModelViewSet)
router.register(r'users', UserViewSet, basename='user')
# urlpatterns = router.urls

router.register('project', ProjectModelViewSet)
router.register('ToDo', ToDoModelViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
    # path('viewsets/', include(router.urls)),
    # path('authors/', include(router.urls)),
    # path('users_api_view/', UserApiView.as_view())    
]
