/*  Selecciona de una tabla todas las casillas vacías y ponlas un color de fondo amarillo. */

window.addEventListener("load", () => {
    $("td:empty").css("background-color", "yellow");
});