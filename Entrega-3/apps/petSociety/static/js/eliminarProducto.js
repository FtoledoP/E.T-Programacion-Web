const formularioEliminar = document.querySelectorAll("#eliminarProducto");
var modalEliminar = document.getElementById('modalEliminar');
const closeButton = modalEliminar.querySelector('.btn');

formularioEliminar.forEach((form) => {
    form.addEventListener("submit", function (evento) {
        evento.preventDefault();
        var modalInstance = new bootstrap.Modal(modalEliminar);
        modalInstance.show();


        var currentForm = this;


        closeButton.addEventListener("click", function () {

            currentForm.submit();
        });
    });
});