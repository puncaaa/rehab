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

def education_view(request):
    return render(request, 'landing/education.html')

def contacts_view(request):
    return render(request, 'landing/contacts.html')

def membership_view(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        organization = request.POST.get('organization')
        # Here we could save a model or send an email, but rendering with submitted context is sufficient for front-end demonstration.
        return render(request, 'landing/membership.html', {'submitted': True, 'name': name})
    return render(request, 'landing/membership.html')

def press_media_view(request):
    return render(request, 'landing/press_media.html')
