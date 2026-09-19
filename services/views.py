from django.shortcuts import render

from .models import Category, WorkingHour


def home(request):
    categories = Category.objects.prefetch_related("services")
    working_hours = WorkingHour.objects.all()

    return render(
        request,
        "index.html",
        {
            "categories": categories,
            "working_hours": working_hours,
        },
    )