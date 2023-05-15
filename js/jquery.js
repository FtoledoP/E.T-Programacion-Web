//------------------- VALIDACION REGISTRO ------------------------------
$(function(){
    $("#formulario").validate({
        rules:{
            txtNombre:{
                required: true,
                minlength:5
            },
            txtApe:{
                required: true,
                minlength:5
            },
            txtCorreo:{
                required: true,
                minlength: 10,
                email :true
            },
            txtContra:{
                required: true,
                minlength:5,
            }
        },
        messages:{
            txtNombre:{
                required: "Debe ingresar un nombre",
                minlength: "El largo minimo es 5"
            },
            txtApe:{
                required: "Debe ingresar un apellido",
                minlength: "El largo minimo es 5"
            },
            txtCorreo:{
                required: "Debe ingresar un correo",
                minlength: "El largo minimo es 10",
                email: "Debe ingresar un correo válido"
            },
            txtContra:{
                required: "Debe ingresar una contraseña",
                minlength: "El largo minimo es 5"
            }
        }
    })
}) 

//------------------------------------- FUNCIONALIDAD A ELEMENTO HTML CON JQUERY -----------------------------------------------

$("#thx").hide();

$("#btnGuardar").on("click",function(){

    $("#thx").fadeIn();

})
