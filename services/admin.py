from django.contrib import admin

from .models import Category, Service, WorkingHour


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "slug", "order")
    search_fields = ("name",)
    ordering = ("order", "id")


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ("name", "category", "price", "order")
    list_filter = ("category",)
    search_fields = ("name", "description")
    ordering = ("category", "order", "id")

@admin.register(WorkingHour)
class WorkingHourAdmin(admin.ModelAdmin):
    list_display = (
        "day",
        "opening_time",
        "closing_time",
    )
    ordering = ("day",)