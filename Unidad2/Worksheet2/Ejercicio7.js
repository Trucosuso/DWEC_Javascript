// Tabla de dos columnas. Número en la primera seno en la segunda
document.write("<table style=\"border-collapse: collapse\">");
document.write("<tr><th style=\"border: 1px solid black\"> Ángulo (º) </th><th style=\"border: 1px solid black\"> Seno </th></tr>");
for (let i = 0; i <= 90; i+=15) {
    document.write("<tr><td style=\"border: 1px solid black\">" + i + "</td><td style=\"border: 1px solid black\">"+Math.sin(i * (Math.PI / 180)) + "</td></tr>");
}
document.write("</table>");
