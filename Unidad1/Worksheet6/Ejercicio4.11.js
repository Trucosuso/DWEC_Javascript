var numColumnas = parseInt(prompt("Introduzca el número de columnas"));
var anchoCelda = parseInt(prompt("Introduzca el ancho de la celda"));
var altoCelda = parseInt(prompt("Introduzca el alto de la celda"));

document.write("<table border=\"0\" cellspacing=\"2\" bgcolor=\"black\">");
document.write("<tr height=\""+altoCelda+"\">");
for (let i = 0; i < numColumnas; i++) {
    document.write("<td bgcolor=\"white\" width=\""+anchoCelda+"\"> &nbsp; </td>");
}
document.write("</tr>");
document.write("</table>");