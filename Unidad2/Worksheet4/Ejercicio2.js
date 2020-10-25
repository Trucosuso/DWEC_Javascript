/* Muestra, maquetada en una tabla HTML toda la información que puedas extraer mediante JavaScript de la pantalla del cliente. */

document.write("<table style=\"border-collapse: collapse\">");
document.write("<tr><th style=\"border: 1px solid black\">Propiedad</th><th style=\"border: 1px solid black\">Valor</th></tr>");
for (const propiedad in screen) {
    document.write("<tr><td style=\"border: 1px solid black\">"+propiedad+"</td>");
    document.write("<td style=\"border: 1px solid black\">"+screen[propiedad]+"</td></tr>");
}
for (const propiedad in screen.orientation) {
    document.write("<tr><td style=\"border: 1px solid black\">orientation."+propiedad+"</td>");
    document.write("<td style=\"border: 1px solid black\">"+screen.orientation[propiedad]+"</td></tr>");
}
document.write("</table>");