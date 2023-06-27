const formulario = document.getElementById("agregarUsuarioForm");
const toastLiveExample = document.getElementById('toastError')
const toastErrorCorreo = document.getElementById('toastErrorCorreo');
var modal = document.getElementById('exampleModal');
const closeButton = modal.querySelector('.btn');

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    correo = document.getElementById("txtCorreo").value;
    errorCorreo = false

    if ((document.getElementById("txtNombre").value.length == 0) || 
    (document.getElementById("txtCorreo").value.length == 0) || 
    (document.getElementById("txtApe").value.length == 0) || 
    (document.getElementById("txtContra").value.length == 0) ||
    (document.getElementById("cmbTipo").value == "Seleccione")) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastBootstrap.show()

    }else{
        fetch('/api/usuarios/')
            .then(response => response.json())
            .then(data => {
                const usuarios = data;
                console.log(usuarios);

                const listaTemporal = [];
                usuarios.forEach(usuario => {
                    listaTemporal.push(usuario);
                });

                listaTemporal.forEach(usuario => {
                    console.log(usuario);
                    if (!(usuario.correo == correo)) {
                        
                    } else {
                        const toastCorreo = bootstrap.Toast.getOrCreateInstance(toastErrorCorreo)
                        toastCorreo.show()
                        errorCorreo = true
                        return;
                    }
                });

                if (errorCorreo == false) {
                    var modalInstance = new bootstrap.Modal(modal);
                    modalInstance.show();
                    closeButton.addEventListener('click', function() {
                        formulario.submit();
                    });
                }

            })
            .catch(error => {
                console.log(error);
            });
    }


})