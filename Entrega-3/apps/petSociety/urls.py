from django.urls import path
from . import views

urlpatterns = [
    path('',views.cargarInicio)
]

urlpatterns = [
    path('',views.cargarPerros)
]

urlpatterns = [
    path('',views.cargarGatos)
]

urlpatterns = [
    path('',views.cargarMas)
]

