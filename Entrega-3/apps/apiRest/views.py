from django.shortcuts import render
from apps.petSociety.models import Producto, Usuario
from django.http import JsonResponse
from django.views import View

# Create your views here.

class ObtenerProductos(View):
    def get(self,request):
        productos = Producto.objects.all()
        return JsonResponse(list(productos.values()),safe=False)
    
class ObtenerUsuarios(View):
    def get(self,request):
        usuarios = Usuario.objects.all()
        return JsonResponse(list(usuarios.values()),safe=False)
