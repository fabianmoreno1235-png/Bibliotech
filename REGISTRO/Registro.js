/* =====================================
   VALIDAR NÚMERO DE DOCUMENTO
===================================== */

const numeroDocumento = document.getElementById("numeroDocumento");
const errorDocumento = document.getElementById("errorDocumento");

if (numeroDocumento) {

    numeroDocumento.addEventListener("keydown", function(event) {
function validarTeclaDocumento(event) {

    // Teclas especiales que se permiten
    const teclasPermitidas = [
        "Backspace",
        "Delete",
        "ArrowLeft",
        "ArrowRight",
        "Tab",
        "Home",
        "End"
    ];

    // Verificar si es un número
    const esNumero = /^[0-9]$/.test(event.key);

    // Si no es número ni tecla especial, bloquear
    if (!esNumero && !teclasPermitidas.includes(event.key)) {

        event.preventDefault();

        const error = document.getElementById("errorDocumento");

        error.textContent =
            "⚠ Solo se permiten números en este campo.";

        error.style.display = "block";
    }
}


function validarDocumento(input) {

    const error = document.getElementById("errorDocumento");

    // Detectar cualquier cosa que NO sea un número
    if (/[^0-9]/.test(input.value)) {

        error.textContent =
            "⚠ Solo se permiten números en este campo.";

        error.style.display = "block";

        input.classList.add("input-error");

        // Eliminar letras y símbolos
        input.value = input.value.replace(/[^0-9]/g, "");

    } else {

        error.textContent = "";

        error.style.display = "none";

        input.classList.remove("input-error");

        if (input.value.length > 0) {
            input.classList.add("input-correcto");
        } else {
            input.classList.remove("input-correcto");
        }
    }
}