from django.conf.urls import patterns, include, url
from views import user_login, index
import views

urlpatterns = patterns('',
    url(r'^$', index, name='index'), # ADD THIS NEW TUPLE!
    url(r'^login/$', views.user_login, name='login'),
    url(r'^login_main/$', views.user_login_main, name='login'),
    url(r'^logout/$', views.user_logout, name='logout'),
)