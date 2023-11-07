from django.contrib import admin

from . import models as m


class CategoryAdmin(admin.ModelAdmin):
    list_display = ["name", "description"]


admin.site.register(m.Category, CategoryAdmin)
