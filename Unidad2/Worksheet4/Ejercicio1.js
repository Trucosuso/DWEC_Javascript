/* Muestra, maquetada en una tabla HTML toda la información que puedas extraer mediante JavaScript del navegador cliente. */

document.write("<table style=\"border-collapse: collapse\">");
document.write("<tr><th style=\"border: 1px solid black\">Propiedad</th><th style=\"border: 1px solid black\">Valor</th></tr>");
for (const propiedad in navigator) {
    document.write("<tr><td style=\"border: 1px solid black\">"+propiedad+"</td>");
    document.write("<td style=\"border: 1px solid black\">"+navigator[propiedad]+"</td></tr>");
}
document.write("</table>");