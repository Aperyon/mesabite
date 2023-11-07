from rest_framework import serializers

from . import models as m


class MenuItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = m.MenuItem
        fields = ["url", "uuid", "name", "description", "image"]
        extra_kwargs = {
            "url": {"view_name": "menuitem-detail", "lookup_field": "uuid"},
        }
