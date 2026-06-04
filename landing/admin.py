from django.contrib import admin
from .models import PressRelease, PressReleaseImage

class PressReleaseImageInline(admin.TabularInline):
    model = PressReleaseImage
    extra = 1

@admin.register(PressRelease)
class PressReleaseAdmin(admin.ModelAdmin):
    list_display = ('title', 'date')
    search_fields = ('title', 'content')
    list_filter = ('date',)
    inlines = [PressReleaseImageInline]

