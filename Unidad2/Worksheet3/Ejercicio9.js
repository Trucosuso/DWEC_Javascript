/**
 * 
 * @param {string} cadena 
 */
/*function escribeEnCuadrado(cadena) {
    document.write("<table>");

    for (let i = 0; i < cadena.length; i++) {
        document.write("<tr>");
        for (let j = 0; j < cadena.length; j++) {
            document.write("<td>" + cadena.charAt(j) +"</td>");
        }
        document.write("</tr>");
    }



    document.write("</table>");
}*/


escribeEnCuadrado("HOLA");

/**
 * 
 * @param {string} cadena 
 */
function escribeEnCuadrado(cadena) {
    document.write("<table>");

    document.write("<tr>");
    for (let i = 0; i < cadena.length; i++) {
        document.write("<td>" + cadena.charAt(i) +"</td>");
    }
    document.write("</tr>");

    for (let i = 1; i < cadena.length-1; i++) {
        document.write("<tr>");
        for (let j = 0; j < cadena.length; j++) {
            document.write("<td>")
        }
        document.write("</tr>");
    }



    document.write("</table>");
}