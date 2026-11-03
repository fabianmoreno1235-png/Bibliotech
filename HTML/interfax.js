function mostrarLogin() {

    const modal = document.getElementById("loginModal");

    if (modal) {
        modal.classList.add("activo");
    }
}


function cerrarLogin() {

    const modal = document.getElementById("loginModal");

    if (modal) {
        modal.classList.remove("activo");
    }
}


function irRegistro() {

    window.location.href = "registro.html";
}


function iniciarSesion() {

    const usuario =
        document.getElementById("usuario").value;

    const contrasena =
        document.getElementById("contrasena").value;

    if (usuario === "" || contrasena === "") {

        alert("Por favor, complete todos los campos.");

        return;
    }

    // Credenciales de prueba
    if (
        usuario === "admin" &&
        contrasena === "12345"
    ) {

        window.location.href = "prueba.html";

    } else {

        alert("Usuario o contraseña incorrectos.");
    }
}
/* =====================================================
   CARRUSEL DE FOTOGRAFÍAS
   ===================================================== */

let fotoActual = 0;


/* Obtener todas las fotografías */

const fotosCarrusel =
    document.querySelectorAll(".foto-carrusel");


/* Obtener los indicadores */

const indicadoresCarrusel =
    document.querySelectorAll(".indicador");


/* =====================================================
   MOSTRAR FOTOGRAFÍA
   ===================================================== */

function mostrarFoto(numero) {

    /* Verificar que existan fotografías */

    if (fotosCarrusel.length === 0) {
        return;
    }


    /* Si llegamos después de la última */

    if (numero >= fotosCarrusel.length) {

        fotoActual = 0;

    }

    /* Si retrocedemos antes de la primera */

    else if (numero < 0) {

        fotoActual = fotosCarrusel.length - 1;

    }

    /* Número válido */

    else {

        fotoActual = numero;

    }


    /* Quitar la clase activa */

    fotosCarrusel.forEach(function(foto) {

        foto.classList.remove("activa");

    });


    /* Mostrar la fotografía actual */

    fotosCarrusel[fotoActual]
        .classList.add("activa");


    /* Actualizar indicadores */

    indicadoresCarrusel.forEach(function(indicador) {

        indicador.classList.remove("activo");

    });


    if (indicadoresCarrusel[fotoActual]) {

        indicadoresCarrusel[fotoActual]
            .classList.add("activo");

    }

}


/* =====================================================
   CAMBIAR FOTOGRAFÍA
   ===================================================== */

function cambiarFoto(direccion) {

    mostrarFoto(fotoActual + direccion);

}


/* =====================================================
   CAMBIO AUTOMÁTICO
   ===================================================== */

setInterval(function() {

    cambiarFoto(1);

}, 4000);
