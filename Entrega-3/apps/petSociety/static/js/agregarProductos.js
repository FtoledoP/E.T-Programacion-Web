const formulario = document.querySelectorAll("#agregarProductoForm");
const toastLiveExample = document.getElementById('toastError');
const toastErrorSku = document.getElementById('toastErrorSku');

formulario.forEach((form) => {
  form.addEventListener("submit", function (evento) {
    evento.preventDefault();
    sku = document.getElementById("txtSku").value;
    errorSku = false

    if ((document.getElementById("txtSku").value.length == 0) || 
    (document.getElementById("txtNombre").value.length == 0) || 
    (document.getElementById("txtStock").value.length == 0) || 
    (document.getElementById("txtPrecio").value.length == 0) || 
    (document.getElementById("txtDescripcion").value.length == 0) ||
    (document.getElementById("cmbCategoria").value == "Seleccione") ||
    (document.getElementById("txtImg").value == 0)) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastBootstrap.show()

    }else{
      fetch('/api/productos/')
      .then(response => response.json())
      .then(data => {
        const productos = data; 
        console.log(productos);

        const listaTemporal = [];
        productos.forEach(producto => {
          listaTemporal.push(producto);
        });

        listaTemporal.forEach(producto => {
          console.log(producto); 
          if (!(producto.sku == sku)){
          }else{
            const toastSku = bootstrap.Toast.getOrCreateInstance(toastErrorSku)
            toastSku.show()
            errorSku = true
            return;
          }
        });

        if (errorSku == false){
          this.submit()
        }

      })
      .catch(error => {
        console.log(error);
      });
    }
  });
});