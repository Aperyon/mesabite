from rest_framework import viewsets

from . import models as m
from . import serializers as s


class FolderViewSet(viewsets.ModelViewSet):
    queryset = m.Folder.objects.all()
    lookup_field = "uuid"
    serializer_class = s.FolderSerializer
