from django.contrib import admin

from . import models as m


class FolderAdmin(admin.ModelAdmin):
    list_display = ["name", "description"]


admin.site.register(m.Folder, FolderAdmin)
