from rest_framework import serializers

from . import models as m


class FolderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = m.Folder
        fields = ["url", "uuid", "name", "description", "image"]
        extra_kwargs = {
            "url": {"view_name": "folder-detail", "lookup_field": "uuid"},
        }
