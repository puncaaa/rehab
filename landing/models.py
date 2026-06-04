from django.db import models
from django.utils import timezone

class PressRelease(models.Model):
    title = models.CharField(max_length=500, verbose_name="Заголовок")
    date = models.DateField(default=timezone.now, verbose_name="Дата")
    content = models.TextField(verbose_name="Текст пресс-релиза")
    
    class Meta:
        verbose_name = "Пресс-релиз"
        verbose_name_plural = "Пресс-релизы"
        ordering = ['-date']

    def __str__(self):
        return self.title

class PressReleaseImage(models.Model):
    press_release = models.ForeignKey(PressRelease, related_name='images', on_delete=models.CASCADE, verbose_name="Пресс-релиз")
    image = models.ImageField(upload_to='news_images/', verbose_name="Фотография")

    class Meta:
        verbose_name = "Фотография пресс-релиза"
        verbose_name_plural = "Фотографии пресс-релиза"

    def __str__(self):
        return f"Фото для {self.press_release.title}"
