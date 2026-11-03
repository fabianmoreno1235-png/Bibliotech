/* =====================================
   VER RESERVA
===================================== */

function verReserva(libro, usuario) {

    alert(
        "DETALLE DE LA RESERVA\n\n" +

        "Libro: " + libro + "\n" +

        "Usuario: " + usuario + "\n\n" +

        "Estado: Pendiente de atención"
    );

}


/* =====================================
   MARCAR RESERVA COMO ATENDIDA
===================================== */

function atenderReserva(boton) {

    // Obtener la tarjeta donde se encuentra
    // el botón que fue presionado

    let tarjeta = boton.closest(".notificacion");


    // Buscar el estado

    let estado = tarjeta.querySelector(".estado");


    // Cambiar el texto

    estado.textContent = "Atendida";


    // Cambiar los colores

    estado.style.backgroundColor = "#e4f7e8";

    estado.style.color = "#27833e";


    // Cambiar texto del botón

    boton.textContent = "✓ Reserva atendida";


    // Cambiar color del botón

    boton.style.backgroundColor = "#3c944d";


    // Desactivar botón

    boton.disabled = true;


    // Cambiar el punto de notificación

    tarjeta.querySelector(".punto").style.backgroundColor = "#3c944d";

}