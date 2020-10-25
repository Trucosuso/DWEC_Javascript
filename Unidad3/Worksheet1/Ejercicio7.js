/* 7. Crea una función que calcule el factorial de un número dado. Para comprobarlo,
diseña una web que muestre en forma de tabla el factorial para los valores de 1 a 10. */

/**
 * Calcula el factorial de un número positivo mediante recursividad
 * @param {Number} numero 
 */
function factorial(numero) {
    if (numero < 0) {
        return undefined;
    } else if (numero === 0) {
        return 1;
    }
    return numero * factorial(numero-1);
}

document.write("<table><tr><th>Número</th><th>Factorial</th></tr>");

for (let i = 1; i <= 10; i++) {
    document.write("<tr><td>"+ i +"</td><td>"+ factorial(i) +"</td></tr>");
}
document.write("</table>");