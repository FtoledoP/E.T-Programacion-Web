from django.urls import path
from . import views

urlpatterns = [
    path('',views.cargarInicio),
    path('perros',views.cargarPerros),
    path('gatos',views.cargarGatos),
    path('mas',views.cargarMas),
    path('agregarProductos',views.cargarAgregarProductos),
    path('agregarProductoForm',views.agregarProductos)
    
]


