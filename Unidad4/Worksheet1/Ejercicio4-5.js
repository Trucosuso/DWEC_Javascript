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

// Esto podría llamarse main, porque se ejecuta cuando termina de cargarse el body
function pintarTablayBoton() {
    // Pintamos la tabla y el botón
    let tabla = "";
    tabla += "<table style=\"border-collapse: collapse; border: 1px solid black;\">";
    for (let i = 0; i < 100; i++) {
        tabla += "<tr>";
        for (let j = 0; j < 100; j++) {
            tabla += "<td height=\"2\" width=\"2\"></td>";
        }
        tabla += "</tr>";
    }
    tabla += "</table>";
    document.getElementById("tabla").innerHTML = tabla;

    document.getElementById("tabla").innerHTML += "<br><button id=\"botonBorrar\">Borrar todo</button>";

    // Añadimos Event Listener a las celdas y al botón
    let celdas = document.querySelectorAll("td");
    celdas.forEach(celda => {
        celda.addEventListener("mousemove", pintarCelda);
    });
    document.getElementById("botonBorrar").addEventListener("click", borrarTodo);
}

function pintarCelda(e) {
    if (e.ctrlKey) {
        e.target.style.backgroundColor = "red";
    } else if (e.shiftKey) {
        e.target.style.backgroundColor = "blue";
    } else if (e.buttons == 1) {
        e.target.style.backgroundColor = "white";
    }
}

function borrarTodo() {
    var celdas = document.querySelectorAll("td");
    for (let celda of celdas) {
        celda.style.backgroundColor = "white";
    }
}

window.addEventListener("load", pintarTablayBoton);
