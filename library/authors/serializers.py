from rest_framework.serializers import HyperlinkedModelSerializer
from .models import Author, Book, Article, Biography


class AuthorModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Author
        fields = '__all__'


class BiographyModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        text = Biography
        fields = '__all__'


class BookModelSerializer(HyperlinkedModelSerializer):

    class Meta:
        model = Book
        fields = '__all__'


class ArticleModelSerializer(HyperlinkedModelSerializer):
    author = AuthorModelSerializer()

    class Meta:
        model = Article
        fields = '__all__'
