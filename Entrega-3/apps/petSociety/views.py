from django.shortcuts import render

# Create your views here.


def cargarInicio(request):
    return render(request,"index.html")

def cargarPerros(request):
    return render(request,"perros.html")

def cargarGatos(request):
    return render(request,"gatos.html")

def cargarMas(request):
    return render(request,"mas.html")