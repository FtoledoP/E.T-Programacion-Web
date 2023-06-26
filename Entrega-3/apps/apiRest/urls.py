from django.urls import path
from .views import *

urlpatterns = [ 
    path('productos/',ObtenerProductos.as_view()),
    path('usuarios/',ObtenerUsuarios.as_view())
]