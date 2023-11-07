from rest_framework import serializers

from . import models as m


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = m.Category
        fields = ["url", "uuid", "name", "description", "image", "folder"]
        extra_kwargs = {
            "url": {"view_name": "category-detail", "lookup_field": "uuid"},
            "folder": {"view_name": "folder-detail", "lookup_field": "uuid"},
        }
