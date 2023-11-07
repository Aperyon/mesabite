from rest_framework import viewsets

from . import models as m
from . import serializers as s


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = m.Category.objects.all()
    lookup_field = "uuid"
    serializer_class = s.CategorySerializer
