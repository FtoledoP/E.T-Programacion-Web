from django.urls import path
from . import views

urlpatterns = [
    path('',views.cargarInicio),
    path('perros',views.cargarPerros,name = 'perros'),
    path('gatos',views.cargarGatos,name = 'gatos'),
    path('mas',views.cargarMas,name = 'mas'),
    path('inicio',views.cargarInicio,name = 'inicio')
    
]


