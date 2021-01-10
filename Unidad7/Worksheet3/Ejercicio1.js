/* Crea una tabla de 8 filas, a continuación pon el fondo rojo a todas aquellas que estén por encima de la tercera (2) y pon el fondo azul a todas aquellas que estén por debajo de la tercera (2) */

window.addEventListener("load", () => {
    // $("tr:gt(2)").css("background-color", "red"); DEPRECATED
    $("tr").slice(3).css("background-color", "red");
    // $("tr:lt(2)").css("background-color", "blue"); DEPRECATED
    $("tr").slice(0, 2).css("background-color", "blue");
});