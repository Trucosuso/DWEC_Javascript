/* 1) Diseña una web que hará uso de cookies para guardar el nombre del usuario. En caso de no tener ninguna cookie de ese sitio, deberá preguntar el nombre del usuario y almacenarlo en una cookie que caducará en 5 minutos. Tras esto saludará al usuario mediante un mensaje en pantalla. En caso de tener ya creada la cookie deberá leerla y mostrar el mensaje anterior directamente. Deberá proporcionar también un enlace para borrar la cookie (lo que podríamos llamar ‘Cerrar Sesión’). 
 * 2) Mejora el ejercicio anterior dando al usuario las opciones para que pueda configurar el color de fondo, de párrafo y el tamaño de la letra.
 */

/**
 * Get the value of a given cookie. 
 * @param {String} cname 
 * @returns {String} Value of the cookie. If it doesn't exists returns an empty string
 */
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/**
 * Sets a cookie with value and expire date with path /
 * @param {String} cname Name of the cookie
 * @param {String} cvalue Value of the cookie
 * @param {Number} exminutes Minutes to expire
 */
function setCookie(cname, cvalue, exminutes) {
    var d = new Date();
    d.setTime(d.getTime() + (exminutes * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/**
 * Deletes a cookie
 * @param {String} cname Name of the cookie
 */
function deleteCookie(cname) {
    document.cookie = cname + "=; max-age=0;path=/";
}

function main() {
    let username = getCookie("username");
    document.getElementById("botonAplicarEstilo").addEventListener("click", guardarEstilo);
    aplicarEstilo();
    if (username) {
        saludarUsuario(username);
    } else {
        mostrarFormulario();
    }
}

function almacenarUsuario() {
    let usuario = document.getElementById("usuario").value;
    setCookie("username", usuario, 5);
    saludarUsuario(usuario);
}

function cerrarSesion() {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    mostrarFormulario();
}

function mostrarFormulario() {
    let formulario = "<label for=\"usuario\">Introduzca su nombre de usuario</label> ";
    formulario += "<input type=\"text\" name=\"usuario\" id=\"usuario\"><br>";
    formulario += "<input type=\"button\" value=\"Iniciar sesión\" id=\"iniciarSesion\"></input>";

    document.getElementById("formularioIniciarSesion").innerHTML = formulario;
    document.getElementById("iniciarSesion").addEventListener("click", almacenarUsuario);
}

function saludarUsuario(usuario) {
    let botonCerrarSesion = "<input type=\"button\" value=\"Cerrar sesión\" id=\"cerrarSesion\">";
    document.getElementById("formularioIniciarSesion").innerHTML = "Bienvenido " + usuario + "<br>" + botonCerrarSesion;
    document.getElementById("cerrarSesion").addEventListener("click", cerrarSesion);
}

function guardarEstilo() {
    let colorFondo = document.getElementById("colorFondo").value;
    let colorParrafo = document.getElementById("colorParrafo").value;
    let tamañoLetra = document.getElementById("tamañoLetra").value;

    setCookie("colorFondo", colorFondo, 5);
    setCookie("colorParrafo", colorParrafo, 5);
    setCookie("tamañoLetra", tamañoLetra, 5);
    aplicarEstilo();
}

function aplicarEstilo() {
    let colorFondo = getCookie("colorFondo");
    if (colorFondo) {
        document.body.style.backgroundColor = colorFondo;
        document.getElementById("colorFondo").value = colorFondo;
    }

    let colorParrafo = getCookie("colorParrafo");
    if (colorParrafo) {
        document.body.style.color = colorParrafo;
        document.getElementById("colorParrafo").value = colorParrafo;
    }

    let tamañoLetra = getCookie("tamañoLetra");
    if (tamañoLetra) {
        document.body.style.fontSize = tamañoLetra + "rem";
        document.getElementById("tamañoLetra").value = tamañoLetra;
    }
}

window.addEventListener("load", main);
