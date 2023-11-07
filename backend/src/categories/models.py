import uuid
from django.db import models


class Category(models.Model):
    uuid = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    name = models.CharField(max_length=255)
    description = models.TextField(default="", blank=True)
    image = models.ImageField(blank=True, null=True)
    folder = models.ForeignKey(
        "folders.Folder", blank=True, null=True, on_delete=models.SET_NULL
    )
