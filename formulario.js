function validar() {
    var nombre, apeliidos, correo, usuario, clave, telefono, expresion;
    nombre = document.getElementById("nombre").value;
    apeliidos = document.getElementById("apellidos").value;
    email = document.getElementById("email").value;
    fecha = document.getElementById("fechaNacimiento").value;
    textarea = document.getElementById("input-textarea").value;
    expresion = /\w+@\w+\.+[a-z]/;

    if (nombre == "" || apeliido == "" || email == "" || fecha == "" || textarea == "") {

        alert("Todos los campos son obligatorios");
        return false;
    }
    if (nombre.length > 15) {
        alert("El nombre es muy largo");
        return false;
    }
    if (apeliido.length > 20) {
        alert("Los apellido son muy largos ");
        return false;
    }
    if (email.length > 30) {
        alert("El correo es muy largo");
        return false;
    }
    if (!expresion.test(email)) {
        alert("el correo no es valido ");
        return false;
    }
    if (textarea.length > 200) {
        alert("El mensaje solo debe tener 200 caracteres como maximo");
        return false;
    }
}

$(function () {
    $.datepicker.setDefaults($.datepicker.regional["es"]);
    $("#fechaNacimiento").datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: '-100:+100'
    });
});

function Anos() {
    var FechaNacimiento = document.getElementById('fechaNacimiento').value;
    var fechaNace = new Date(FechaNacimiento);
    var fechaActual = new Date();
    var mes = fechaActual.getMonth();
    var dia = fechaActual.getDate();
    var año = fechaActual.getFullYear();
    fechaActual.setDate(dia);
    fechaActual.setMonth(mes);
    fechaActual.setFullYear(año);
    edad = Math.floor(((fechaActual - fechaNace) / (1000 * 60 * 60 * 24) / 365));
    document.getElementById('EDAD').value = edad;
}

function envio_form() {
    for (var i = 0; i < document.formulario.length; i++) {
        var thisform = document.formulario[i];
        thisform.onsubmit = function () {
            return valida_form(this);
        }
    }
    alert("TU MENSAJE SE ENVIO CORRECTAMENTE")
}