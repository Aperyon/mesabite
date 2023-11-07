from django.contrib import admin

from . import models as m


class MenuItemAdmin(admin.ModelAdmin):
    list_display = ["name", "description"]


admin.site.register(m.MenuItem, MenuItemAdmin)
