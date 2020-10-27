/* 4. Eventos onMouseMove y onLoad. Debemos ser capaces de dibujar con nuestro ratón
en dos colores diferentes. Para ello primero simularemos que disponemos de un
canvas gráfico: realmente se tratará de una tabla con celdas de pequeño tamaño
(100x100 puede valer). Tu programa creará ese canvas una vez cargada la página
(onLoad). Lo siguiente será detectar el movimiento del ratón sobre las celdas para
pintarlas de un color, el cual será rojo si se mantiene pulsada simultaneamente la
tecla Ctrl y azul si se pulsa Shift. En otro caso no deberá pintarse nada. 
5. Añade las siguientes funcionalidades al ejercicio anterior:
    Borrado de lineas con el ratón (mediante la pulsación del botón que tú
decidas)
    Borrar por completo el canvas (con un botón).
*/

function pintarTablayBoton() {
    // Pintamos la tabla y el botón
    document.write("<table>");
    for (let i = 0; i < 4; i++) {
        document.write("<tr>");
        for (let j = 0; j < 4; j++) {
            document.write("<td height=\"100\" width=\"100\" style=\"border: 1px solid black;\"></td>");
        }
        document.write("</tr>");
    }
    document.write("</table><br>");
    document.write("<button id=\"botonBorrar\">Borrar todo</button>");

    // Añadimos Event Listener a las celdas y al botón
    let celdas = document.querySelectorAll("td");
    celdas.forEach(celda => {
        celda.addEventListener("mousemove", pintarCelda);
    });
    document.querySelector("#botonBorrar").addEventListener("click", borrarTodo);
}

function pintarCelda(e) {
    if (e.ctrlKey) {
        e.explicitOriginalTarget.style.backgroundColor = "red";
    } else if (e.shiftKey) {
        e.explicitOriginalTarget.style.backgroundColor = "blue";
    } else if (e.buttons == 1) {
        e.explicitOriginalTarget.style.backgroundColor = "white";
    }
}

function borrarTodo() {
    var celdas = document.querySelectorAll("td");
    for (let celda of celdas) {
        celda.style.backgroundColor = "white";
    }
}

window.addEventListener("load", pintarTablayBoton());
