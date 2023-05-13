document.getElementById("valCorreo").style.display = "none";
document.getElementById("valContra").style.display = "none";
document.getElementById("valNombre").style.display = "none";
document.getElementById("valApe").style.display = "none";

function validarForm() {
    let txtCorreo = document.getElementById("txtCorreo").value;
    let txtContra = document.getElementById("txtContra").value;
    let txtNombre = document.getElementById("txtNombre").value;
    let txtApe = document.getElementById("txtApe").value;

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

    if (txtNombre.length == 0) {
        document.getElementById("valNombre").style.display = "inline";
        document.getElementById("txtNombre").classList.add("is-invalid");
    } else {
        document.getElementById("txtNombre").classList.remove("is-invalid");
        document.getElementById("txtNombre").classList.add("is-valid");
        document.getElementById("valNombre").style.display = "none";

    }

    if (txtApe.length == 0) {
        document.getElementById("valApe").style.display = "inline";
        document.getElementById("txtApe").classList.add("is-invalid");
    } else {
        document.getElementById("txtApe").classList.remove("is-invalid");
        document.getElementById("txtApe").classList.add("is-valid");
        document.getElementById("valApe").style.display = "none";

    }

}