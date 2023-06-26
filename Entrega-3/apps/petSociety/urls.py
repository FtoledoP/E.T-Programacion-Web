from django.urls import path
from . import views

urlpatterns = [
    path('',views.cargarInicio),
    path('perros',views.cargarPerros),
    path('gatos',views.cargarGatos),
    path('mas',views.cargarMas),
    path('agregarProductos',views.cargarAgregarProductos),
    path('agregarProductoForm',views.agregarProductos),
    path('login', views.cargarLogin),
    path('registrarse', views.cargarRegistrarse),
    path('agregarUsuarioForm', views.agregarUsuario),
    path('editarProductos/<sku>',views.cargarEditarProductos),
    path('editarProductosForm',views.editarProductos),
    path('eliminarProductos/<sku>',views.eliminarProductos),
    path('iniciarSesionForm',views.iniciarSesion)
]


