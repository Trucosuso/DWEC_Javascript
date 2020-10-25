var numColumnas = parseInt(prompt("Introduzca el número de columnas"));
var numFilas = parseInt(prompt("Introduzca el número de filas"));
var anchoCelda = parseInt(prompt("Introduzca el ancho de la celda"));
var altoCelda = parseInt(prompt("Introduzca el alto de la celda"));

document.write("<table border=\"0\" cellspacing=\"2\" bgcolor=\"black\">");
for (let i = 0; i < numFilas; i++) {
    document.write("<tr height=\""+altoCelda+"\">");
    for (let j = 0; j < numColumnas; j++) {
        document.write("<td bgcolor=\"white\" width=\""+anchoCelda+"\"> &nbsp; </td>");
    }
    document.write("</tr>");
}
document.write("</table>");