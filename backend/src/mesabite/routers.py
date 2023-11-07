from rest_framework.routers import DefaultRouter

import categories.views
import folders.views
import menu_items.views

router = DefaultRouter()
router.register("categories", categories.views.CategoryViewSet)
router.register("folders", folders.views.FolderViewSet)
router.register("menu-items", menu_items.views.MenuItemViewSet)
