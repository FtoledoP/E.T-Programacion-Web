/* document.getElementById("valId").style.display = "none";
document.getElementById("valNombre").style.display = "none";
document.getElementById("valValor").style.display = "none";
document.getElementById("ocultar").style.display = "none";

function validarForm(){
    let txtId = document.getElementById("txtId").value;
    let txtNombre = document.getElementById("txtNombre").value;
    let txtValor = document.getElementById("txtValor").value;

    if (txtId.length == 0) {
        document.getElementById("valId").style.display = "inline";
        document.getElementById("txtId").classList.add("is-invalid");
    }else{
        document.getElementById("txtId").classList.remove("is-invalid");
        document.getElementById("txtId").classList.add("is-valid");
        document.getElementById("valId").style.display = "none";
    }

    if (txtNombre.length == 0) {
        document.getElementById("valNombre").style.display = "inline";
        document.getElementById("txtNombre").classList.add("is-invalid");
    }else{
        document.getElementById("txtNombre").classList.remove("is-invalid");
        document.getElementById("txtNombre").classList.add("is-valid");
        document.getElementById("valNombre").style.display = "none";
    }

    if (txtValor.length == 0) {
        document.getElementById("valValor").style.display = "inline";
        document.getElementById("txtValor").classList.add("is-invalid");
    }else{
        document.getElementById("txtValor").classList.remove("is-invalid");
        document.getElementById("txtValor").classList.add("is-valid");
        document.getElementById("valValor").style.display = "none";
    }





    

}
 */