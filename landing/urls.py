from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about_view, name='about'),
    path('news/', views.news_list, name='news_list'),
    path('news/<int:pk>/', views.news_detail, name='news_detail'),
    path('education/', views.education_view, name='education'),
    path('contacts/', views.contacts_view, name='contacts'),
    path('membership/', views.membership_view, name='membership'),
    path('press/media/', views.press_media_view, name='press_media'),
]
