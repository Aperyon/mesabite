from rest_framework import viewsets

from . import models as m
from . import serializers as s


class MenuItemViewSet(viewsets.ModelViewSet):
    queryset = m.MenuItem.objects.all()
    lookup_field = "uuid"
    serializer_class = s.MenuItemSerializer
