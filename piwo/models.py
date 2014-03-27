from django.db import models
from django.utils.translation import ugettext_lazy as _
from datetime import datetime

# Create your models here.
class Wpis(models.Model):
    autor = models.CharField(default='' , max_length=150)
    przedmiot = models.CharField(default='' , max_length=50)
    lab = models.CharField(default='' , max_length=50)
    zadanie = models.CharField(default='', max_length=50)
    text = models.TextField()
    data = models.DateTimeField(auto_now_add=True)
    class Meta:
        verbose_name = _('Wpis')
        verbose_name_plural = _('Wpisy')

    def __unicode__(self):
        return unicode(self.text)[:30]
