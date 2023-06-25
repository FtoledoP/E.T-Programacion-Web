const formulario = document.getElementById("editarProductosForm");
const toastLiveExample = document.getElementById('toastError')

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    let camposCompletos = true;

    if ((document.getElementById("txtSku").value.length === 0) || 
    (document.getElementById("txtNombre").value.length === 0) || 
    (document.getElementById("txtStock").value.length === 0) || 
    (document.getElementById("txtPrecio").value.length === 0) || 
    (document.getElementById("txtDescripcion").value.length === 0) ||
    (document.getElementById("cmbCategoria").value === "Seleccione") ||
    (document.getElementById("txtImg").value.length === 0)) {
        camposCompletos = false;
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastBootstrap.show()
    }

    if (camposCompletos) {
        this.submit();
    }
});
