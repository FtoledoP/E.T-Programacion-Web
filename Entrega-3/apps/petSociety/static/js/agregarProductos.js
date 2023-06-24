const formularios = document.querySelectorAll("#agregarProductoForm, #editarProductosForm");
const toastLiveExample = document.getElementById('toastError')

formularios.forEach((formulario) => {
  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

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
        this.submit();
    }

  });
});
