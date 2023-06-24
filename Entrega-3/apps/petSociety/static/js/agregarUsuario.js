const formulario = document.getElementById("agregarUsuarioForm");
const toastLiveExample = document.getElementById('toastError')

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    if ((document.getElementById("txtNombre").value.length == 0) || 
    (document.getElementById("txtCorreo").value.length == 0) || 
    (document.getElementById("txtApe").value.length == 0) || 
    (document.getElementById("txtContra").value.length == 0)) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastBootstrap.show()

    }else{
        this.submit();
    }


})