from django import forms
from piwo.models import Wpis
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _


class WpisForm(forms.ModelForm):
    autor = forms.CharField(max_length=50, required=False)
    przedmiot = forms.CharField(required=False)
    lab = forms.CharField(required=False)
    zadanie = forms.CharField(required=False)
    text= forms.CharField(widget=forms.Textarea(attrs={"class":"span10"}), required=True)

    fields = ('autor', 'przedmiot', 'lab', 'zadanie', 'text')

    # An inline class to provide addistional information on the form.
    class Meta:
        # Provide an association between the ModelForm and a model
        model = Wpis