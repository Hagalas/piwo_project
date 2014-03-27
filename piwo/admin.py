from django.contrib import admin
from piwo.models import Wpis

class WpisAdmin(admin.ModelAdmin):
    list_display = ('text', 'zadanie', 'lab', 'autor')


admin.site.register(Wpis, WpisAdmin)
