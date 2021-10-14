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
