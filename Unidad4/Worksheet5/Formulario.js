function inicio() {
    document.getElementById("nombre").addEventListener("focusout", comprobarNombreYApellidos);
    document.getElementById("apellidos").addEventListener("focusout", comprobarNombreYApellidos);
    document.getElementById("DNI").addEventListener("focusout", comprobarDNI);
    document.getElementById("telefono").addEventListener("focusout", comprobarTelefono);
    document.getElementById("email").addEventListener("focusout", comprobarEmail);
    document.getElementById("usuario").addEventListener("focusout", comprobarUsuario);
}

window.onload = inicio;

/**
 * No permitir números en el nombre o en el apellido
 * @param {FocusEvent} e 
 */
function comprobarNombreYApellidos(e) {
    /** @type {RegExp} */
    let expresion = /\d/;

    if (expresion.test(e.currentTarget.value)) {
        e.currentTarget.setCustomValidity("No puede haber números");
    } else {
        e.currentTarget.setCustomValidity("");
    }
}

/**
 * DNI con 8 números y una letra. NO COMPRUEBA QUE LA LETRA SEA CORRECTA
 * @param {FocusEvent} e 
 */
function comprobarDNI(e) {
    /** @type {RegExp} */
    let expresion = /^\d{8}[A-Za-z]$/;
    /** @type {String} */
    let DNI = e.currentTarget.value;

    if (expresion.test(DNI) && DNI.slice(-1) == letraDNI(DNI)) {
        e.currentTarget.setCustomValidity("");
    } else {
        e.currentTarget.setCustomValidity("Introduzca un DNI Válido");
    }
}

/**
 * Teléfono que tenga 9 números y empiece por 6, 7, 8 o 9
 * @param {FocusEvent} e 
 */
function comprobarTelefono(e) {
    /** @type {RegExp} */
    let expresion = /^[6-9]\d{8}$/;

    if (!expresion.test(e.currentTarget.value.replace(/\s+/g, ""))) {
        e.currentTarget.setCustomValidity("Introduzca un número válido.");
    } else {
        e.currentTarget.setCustomValidity("");
    }
}

/**
 * Email con formato correcto
 * @param {FocusEvent} e 
 */
function comprobarEmail(e) {
    /** @type {RegExp} */
    let expresion = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!expresion.test(e.currentTarget.value)) {
        e.currentTarget.setCustomValidity("Introduzca un email válido");
    } else {
        e.currentTarget.setCustomValidity("");
    }
}

/**
 * Usuario formado por al menos 8 caracteres, con número y algún signo de puntuación.
 * Cuenta como caracteres válidos algunos signos que no son de puntuación (por ejemplo %) pero sigue requieriendo al menos un signo de puntuación (por ejemplo :)
 * @param {FocusEvent} e 
 */
function comprobarUsuario(e) {
    /** @type {RegExp} */
    let expresion = /^(?=.*[A-Za-zÑñ])(?=.*\d)(?=.*[,;.:'"«»()[\]{}¿?¡!\-])[A-Za-zÑñ\d,;.:'"«»()[\]{}¿?¡!\-@^_+|~`<>/$%*#&]{8,}$/;

    if (!expresion.test(e.currentTarget.value)) {
        e.currentTarget.setCustomValidity("Introduzca un usuario de al menos 8 caracteres, un número y un signo de puntuacion");
    } else {
        e.currentTarget.setCustomValidity("");
    }
}

/**
 * Devuelve la letra mayúscula correspondiente al DNI
 * @param {String} DNI
 * @returns {String}
 */
function letraDNI(DNI) {
    let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    let posicion = DNI.slice(0, -1) % 23;
    return letras.charAt(posicion);
}