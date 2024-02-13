aceptar = function () {
    let validacion
    validacion = recuperarTexto("txtFecha");

    if (validacion == "2021-05-04") {
       
        window.location.href = "index.html"
    }
    else if ( validacion == "") {
        alert("No has seleccionado nada amor")
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: "Piensalo bien amor"
          });
        mostrarTextoEnCaja("txtFecha", "")
       

    }
}
fechaDeAniversario = function() {
    // Fecha objetivo (puedes cambiarla a la fecha que desees)
    var fechaProxima = new Date("2024-05-04T14:00:00").getTime();

    // Fecha actual
    var FechaActual = new Date().getTime();
    // Diferencia en milisegundos entre la fecha objetivo y la fecha actual
    var restante = fechaProxima - FechaActual;

    // Calcular días, horas, minutos y segundos restantes
    var days = Math.floor(restante / (1000 * 60 * 60 * 24));
    var hours = Math.floor((restante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((restante % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((restante % (1000 * 60)) / 1000);

    // Mostrar el resultado en un elemento HTML
    document.getElementById("fechaDeAniversario").innerHTML = days + "DIAS " ;
    document.getElementById("horas").innerHTML =  hours + "HORAS "
    document.getElementById("minutos").innerHTML =  minutes + "MINUTOS "
    document.getElementById("segundos").innerHTML = seconds + "SEGUNDOS "
}   

// Actualizar el conteo regresivo cada segundo
setInterval(fechaDeAniversario, 1000);
