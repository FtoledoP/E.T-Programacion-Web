document.getElementById("valCorreo").style.display = "none";
document.getElementById("valContra").style.display = "none";
document.getElementById("ocultar").style.display = "none";


function validarForm() {
    let txtCorreo = document.getElementById("txtCorreo").value;
    let txtContra = document.getElementById("txtContra").value;

    if (txtCorreo.length == 0) {
        document.getElementById("valCorreo").style.display = "inline";
        document.getElementById("txtCorreo").classList.add("is-invalid");
    } else {
        document.getElementById("txtCorreo").classList.remove("is-invalid");
        document.getElementById("txtCorreo").classList.add("is-valid");
        document.getElementById("valCorreo").style.display = "none";

    }

    if (txtContra.length == 0) {
        document.getElementById("valContra").style.display = "inline";
        document.getElementById("txtContra").classList.add("is-invalid");
    } else {
        document.getElementById("txtContra").classList.remove("is-invalid");
        document.getElementById("txtContra").classList.add("is-valid");
        document.getElementById("valContra").style.display = "none";

    }

}

function password(){
    let input = document.getElementById("txtContra");

    if (input.type == "password") {
        input.type = "text";
        document.getElementById("ocultar").style.display = "inline";
        document.getElementById("mostrar").style.display = "none";
    }else{
        input.type = "password";
        document.getElementById("ocultar").style.display = "none";
        document.getElementById("mostrar").style.display = "inline";
    }
}