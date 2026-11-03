/* ==========================
   INICIO DE SESIÓN
========================== */

const formLogin = document.getElementById("formLogin");

if (formLogin) {

    formLogin.addEventListener("submit", function(event) {

        event.preventDefault();

        const usuario =
            document.getElementById("usuario").value.trim();

        const contrasena =
            document.getElementById("contrasena").value.trim();


        if (usuario === "") {

            alert("Ingrese su usuario o correo electrónico.");

            document.getElementById("usuario").focus();

            return;
        }


        if (contrasena === "") {

            alert("Ingrese su contraseña.");

            document.getElementById("contrasena").focus();

            return;
        }


        /*
        USUARIO TEMPORAL PARA PRUEBAS

        Usuario: admin
        Contraseña: 12345
        */

        if (
            usuario === "admin" &&
            contrasena === "12345"
        ) {

            document
                .getElementById("mensajeExito")
                .classList.remove("oculto");

            setTimeout(function() {

                window.location.href = "catalogo.html";

            }, 1500);

        } else {

            alert(
                "No fue posible iniciar sesión.\n\n" +
                "Verifica tus credenciales e intenta nuevamente."
            );

        }

    });

}


/* ==========================
   MOSTRAR CONTRASEÑA
========================== */

function mostrarContrasena() {

    const campo =
        document.getElementById("contrasena");

    if (campo.type === "password") {

        campo.type = "text";

    } else {

        campo.type = "password";

    }

}


/* ==========================
   IR AL REGISTRO
========================== */

function irRegistro() {

    window.location.href = "registro.html";

}


/* ==========================
   VOLVER AL INICIO
========================== */

function irInicio() {

    window.location.href = "index.html";

}


/* ==========================
   CERRAR MENSAJE
========================== */

function cerrarMensaje() {

    const mensaje =
        document.getElementById("mensajeExito");

    if (mensaje) {

        mensaje.classList.add("oculto");

    }

}


/* ==========================
   RECUPERAR CONTRASEÑA
========================== */

function recuperarContrasena() {

    alert(
        "La recuperación de contraseña estará disponible próximamente."
    );

}


/* ==========================
   REGISTRO
========================== */

const formRegistro =
    document.getElementById("formRegistro");


if (formRegistro) {

    formRegistro.addEventListener("submit", function(event) {

        event.preventDefault();


        const contrasena =
            document.getElementById("nuevaContrasena").value;

        const confirmar =
            document.getElementById("confirmarContrasena").value;


        if (contrasena !== confirmar) {

            alert(
                "Las contraseñas no coinciden."
            );

            return;

        }


        alert(
            "Registro realizado correctamente."
        );


        setTimeout(function() {

            window.location.href = "index.html";

        }, 1000);

    });

}