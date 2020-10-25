var ancho = parseInt(prompt("Introduzca el ancho de la casilla"));
var negro = true;

document.write("<table border=\"0\" cellspacing=\"2\" bgcolor=\"black\">");
for (let i = 0; i < 8; i++) {
    document.write("<tr height=\""+ancho+"\">");
    for (let j = 0; j < 8; j++) {
        if (negro == true) {
            document.write("<td bgcolor=\"black\" width=\""+ancho+"\"> &nbsp; </td>");
            negro = false;
        } else {
            document.write("<td bgcolor=\"white\" width=\""+ancho+"\"> &nbsp; </td>");
            negro = true;
        }
    }
    document.write("</tr>");
    negro = !negro;
}
document.write("</table>");