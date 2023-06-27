from django.shortcuts import render, redirect
from django.contrib import messages
from .models import *
import os
from django.conf import settings
from django.core.exceptions import ValidationError
import json

# Create your views here.

def cargarInicio(request):
     tipoUsuario = request.session.get('tipoUsuario', None)
     productos = Producto.objects.all()
     categoria_perros = Producto.objects.filter(id_categoria = 1)
     categoria_gatos = Producto.objects.filter(id_categoria = 2)
     return render(request,"index.html",{"prod":productos,"cate_gatos":categoria_gatos,"cate_perros":categoria_perros,"tipoUsuario":tipoUsuario})


def cargarPerros(request):
     tipoUsuario = request.session.get('tipoUsuario', None)
     productos = Producto.objects.all()
     categoria_perros = Producto.objects.filter(id_categoria = 1)
     return render(request,"perros.html",{"prod":productos,"cate_perros":categoria_perros,"tipoUsuario":tipoUsuario})

def cargarGatos(request):
     tipoUsuario = request.session.get('tipoUsuario', None)
     productos = Producto.objects.all()
     categoria_gatos = Producto.objects.filter(id_categoria = 2)
     return render(request,"gatos.html",{"prod":productos,"cate_gatos":categoria_gatos,"tipoUsuario":tipoUsuario})

def cargarMas(request):
     tipoUsuario = request.session.get('tipoUsuario', None)
     productos = Producto.objects.all()
     categoria_otros = Producto.objects.filter(id_categoria = 3)
     return render(request,"mas.html",{"prod":productos, "cate_otros":categoria_otros,"tipoUsuario":tipoUsuario})

def cargarAgregarProductos(request):
     tipoUsuario = request.session.get('tipoUsuario', None)
     categorias = Categoria.objects.all()
     productos = Producto.objects.all()
     return render(request,"agregarProductos.html",{"cate":categorias, "prod":productos,"tipoUsuario":tipoUsuario})

def agregarProductos(request):
     v_sku = request.POST['txtSku']

     v_nombre = request.POST['txtNombre']
     v_stock = request.POST['txtStock']
     v_precio = request.POST['txtPrecio']
     v_descripcion = request.POST['txtDescripcion']
     v_img = request.FILES['txtImg']
     v_categoria = Categoria.objects.get(id_categoria=request.POST['cmbCategoria'])

     Producto.objects.create(sku=v_sku, nombre=v_nombre, stock=v_stock, precio=v_precio, descripcion=v_descripcion,
                              id_categoria=v_categoria, imagen=v_img)

     return redirect('/agregarProductos')



def cargarLogin(request):
     tipoUsuario = request.session.get('tipoUsuario', None)
     return render(request,"login.html",{"tipoUsuario":tipoUsuario})

def cargarRegistrarse(request):
     tipoUsuario = request.session.get('tipoUsuario', None)
     tipoUser = TipoUsuario.objects.all()
     return render(request,"registrarse.html",{"tipo":tipoUser,"tipoUsuario":tipoUsuario})

def cargarEditarProductos(request,sku):
     tipoUsuario = request.session.get('tipoUsuario', None)
     productos = Producto.objects.get(sku = sku)
     categorias = Categoria.objects.all()
     return render(request,"editarProductos.html",{"prod":productos,"cate":categorias,"tipoUsuario":tipoUsuario})

def editarProductos(request):
     v_sku = request.POST['txtSku']
     productoBD = Producto.objects.get(sku = v_sku)
     v_nombre = request.POST['txtNombre']
     v_stock = request.POST['txtStock']
     v_precio = request.POST['txtPrecio']
     v_descripcion = request.POST['txtDescripcion']
     v_categoria = Categoria.objects.get(id_categoria = request.POST['cmbCategoria'])

     try:
          v_img = request.FILES['txtImg']
          ruta_imagen = os.path.join(settings.MEDIA_ROOT, str(productoBD.imagen))
          os.remove(ruta_imagen)
     except:
          v_img = productoBD.imagen


     productoBD.nombre = v_nombre
     productoBD.stock = v_stock
     productoBD.precio = v_precio
     productoBD.descripcion = v_descripcion
     productoBD.imagen = v_img
     productoBD.id_categoria = v_categoria

     productoBD.save()


     return redirect('/agregarProductos')

def eliminarProductos(request,sku):
     producto = Producto.objects.get(sku = sku)
     ruta_imagen = os.path.join(settings.MEDIA_ROOT, str(producto.imagen))
     os.remove(ruta_imagen)
     producto.delete()
     return redirect('/agregarProductos')

def agregarUsuario(request):

     v_correo = request.POST["txtCorreo"]
     v_nombre = request.POST['txtNombre']
     v_aprellido = request.POST["txtApe"]
     v_contra = request.POST["txtContra"]
     v_tipo = TipoUsuario.objects.get(id_tipo=request.POST['cmbTipo'])



     Usuario.objects.create(correo = v_correo, nombre = v_nombre, apellido = v_aprellido, password = v_contra, id_tipo = v_tipo)      

     return redirect('/')

def iniciarSesion(request):
     if request.method == 'POST':
          correo = request.POST.get('txtCorreo')
          contrasena = request.POST.get('txtContra')

          usuarios = Usuario.objects.filter(correo=correo)
          if usuarios.exists():
               usuario = usuarios.first()
               if usuario.password == contrasena:
                    # Las credenciales son correctas, puedes iniciar sesión
                    request.session['tipoUsuario'] = usuario.id_tipo.nombre_tipo
                    return redirect('/')  # Redirige a la página de inicio o a la que desees
               else:
                    # La contraseña es incorrecta
                    mensaje = 'Contraseña incorrecta'
                    return render(request, 'login.html', {'mensaje': mensaje, 'correo': correo})
          else:
               # El correo no está registrado en el sistema
               mensaje = 'El correo no está registrado'
               return render(request, 'login.html', {'mensaje': mensaje, 'correo': correo})
          
def cerrarSesion(request):
     request.session['tipoUsuario'] = None
     return redirect('/login')

def actualizarStock(request):
     if request.method == 'POST':
          carrito = request.POST.get('carrito')
          # Procesar el carrito y actualizar el stock de los productos
          carrito = json.loads(carrito)  # Convertir el carrito a una lista de diccionarios
          for item in carrito:
               sku = item['id']

               # Obtener el producto y restar la cantidad del stock
               producto = Producto.objects.get(sku=sku)
               producto.stock -= 1
               producto.save()

          return redirect('/')


