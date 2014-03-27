from django.http import HttpResponse, HttpResponseRedirect
from django.template import RequestContext
from django.shortcuts import render_to_response, redirect
from django.contrib.auth import login, authenticate, logout
from piwo.models import Wpis
from piwo.forms import WpisForm#, UserForm, UserProfileForm
from django.contrib.auth.decorators import login_required
from django.core.handlers.wsgi import WSGIRequest
from datetime import datetime
from django.contrib.auth.models import User

def test(request):
    return render_to_response('test.html', {}, RequestContext(request))



