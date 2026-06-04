from django.shortcuts import render, get_object_or_404
from .models import PressRelease

def index(request):
    latest_news = PressRelease.objects.all()[:3]
    return render(request, 'landing/index.html', {'latest_news': latest_news})

def about_view(request):
    return render(request, 'landing/about.html')

def news_list(request):
    news = PressRelease.objects.all()
    return render(request, 'landing/news_list.html', {'news': news})

def news_detail(request, pk):
    news_item = get_object_or_404(PressRelease, pk=pk)
    return render(request, 'landing/news_detail.html', {'news_item': news_item})

def partners_view(request):
    return render(request, 'landing/partners.html')

def contacts_view(request):
    return render(request, 'landing/contacts.html')
