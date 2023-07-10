const toastErrorCarrito = document.getElementById('toastError');
// Obtener referencia al botón "Agregar al Carrito"
var agregarBotones = document.querySelectorAll('.btnProducto');
var modal = document.getElementById('modalAgregar');
const closeButton = modal.querySelector('.btn');

// Agregar un evento de clic a cada botón
agregarBotones.forEach(function(boton) {
  boton.addEventListener('click', function() {
    // Obtener información del producto
    var item = this.parentNode;
    var id = item.querySelector('.idProducto').innerText;
    var titulo = item.querySelector('.tituloProducto').innerText;
    var imgSrc = item.querySelector('.imgProducto').src;
    var precio = item.querySelector('.precioProducto').innerText;

    // Crear objeto de producto
    var producto = {
      id: id,
      titulo: titulo,
      imgSrc: imgSrc,
      precio: precio,
      cantidad: 1
    };

    // Obtener el carrito del localStorage o crear uno vacío
    var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const existe = carrito.some((item) => item.id === producto.id);
    if (existe) {
      // Agregar el producto al carrito
      carrito.push(producto);
      console.log(carrito);

      // Guardar el carrito actualizado en el localStorage
      localStorage.setItem('carrito', JSON.stringify(carrito));

      // Actualizar visualmente el carrito
      var modalInstance = new bootstrap.Modal(modal);
      modalInstance.show();
      closeButton.addEventListener('click', function() {
        actualizarCarrito();
      });
    } else {
      // Agregar el producto al carrito
      carrito.push(producto);
      console.log(carrito);

      // Guardar el carrito actualizado en el localStorage
      localStorage.setItem('carrito', JSON.stringify(carrito));

      // Actualizar visualmente el carrito
      var modalInstance = new bootstrap.Modal(modal);
      modalInstance.show();
      closeButton.addEventListener('click', function() {
        actualizarCarrito();
      });
    }
  });
});

// Función para actualizar visualmente el carrito
function actualizarCarrito() {
  var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  var insertar = document.querySelector('.containerCarrito');
  insertar.innerHTML = '';

  carrito.forEach(function(producto) {
    var contenido = document.createElement('div');
    contenido.className = 'item';
    contenido.innerHTML = `
      <span class="idProducto"> ${producto.id}</span>
      <span class="tituloProducto">${producto.titulo}</span>
      <img class="imgProducto" src="${producto.imgSrc}">
      <span class="precioProducto">${producto.precio}</span>
      `;
    insertar.append(contenido);
    //Boton para eliminar del carrito

    let eliminar = document.createElement("button");
    eliminar.innerText = "Eliminar ❌";
    eliminar.className = "btnProducto";

    contenido.append(eliminar);

    eliminar.addEventListener("click", function() {
      eliminarItem(producto.id);
    });
  });

  var carritoInput = document.getElementById('carritoInput');
  carritoInput.value = JSON.stringify(carrito);
}

function eliminarItem(id) {
  var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  carrito.splice(carrito.findIndex(car => car.id === id), 1);

  let valor = id;
  let obj = JSON.parse(localStorage.getItem("carrito"));
  console.log("STORAGE", obj);
  let arrayTemporal = [];

  for (const i of obj) {
    if (i.id != valor) {
      arrayTemporal.push(i);
    }
  }
  localStorage.setItem("carrito", JSON.stringify(arrayTemporal));
  actualizarCarrito();
  console.log(carrito);
}

function vaciarCarrito() {
  localStorage.removeItem('carrito');
}

const comprarBtn = document.getElementById('comprarBtn');

comprarBtn.addEventListener('click', function() {
  vaciarCarrito();
});
