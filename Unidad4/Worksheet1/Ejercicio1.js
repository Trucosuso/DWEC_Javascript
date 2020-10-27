/*  Captura el evento onClick del ratón para que cada vez que suceda se ejecute un alert. */

function mostrarMensaje() {
    alert("Se ha hecho click");
}   

document.addEventListener("click", mostrarMensaje);