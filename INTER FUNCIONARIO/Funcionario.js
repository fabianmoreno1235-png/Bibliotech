/* =====================================
   CATÁLOGO
===================================== */

const formBusqueda =
    document.getElementById("formBusqueda");


if (formBusqueda) {

    formBusqueda.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const texto =
                document.getElementById("buscar")
                .value
                .trim();

            const tipo =
                document.getElementById("tipoRecurso")
                .value;

            if (texto === "" && tipo === "todos") {

                alert(
                    "Ingrese un término de búsqueda " +
                    "o seleccione un tipo de recurso."
                );

                return;
            }


            alert(
                "Búsqueda realizada.\n\n" +
                "Texto: " +
                (texto || "Todos") +
                "\nTipo: " +
                tipo
            );

        }
    );

}


/* =====================================
   BÚSQUEDAS RÁPIDAS
===================================== */

function buscarRapido(tipo) {

    const buscador =
        document.getElementById("buscar");

    const filtro =
        document.getElementById("tipoRecurso");


    if (tipo === "libros") {

        filtro.value = "libro";

    }

    else if (tipo === "infantil") {

        filtro.value = "infantil";

    }

    else {

        buscador.value = tipo;

    }


    buscador.focus();

}


/* =====================================
   CONSULTAR RECURSO
===================================== */

function consultarRecurso(nombre) {

    alert(
        "Información del recurso:\n\n" +
        nombre +
        "\n\n" +
        "Esta sección mostrará posteriormente " +
        "la información completa del recurso, " +
        "su ubicación y disponibilidad."
    );

}