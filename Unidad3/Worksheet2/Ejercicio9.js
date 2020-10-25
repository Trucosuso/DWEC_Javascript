/* 
CORREGIDO
Haciendo uso de un array unidimensional, escribir un script para simular el lanzamiento de
dos dados. El script debe simular el lanzamiento (aleatorio) de ambos dados. La suma de los
dos valores debe calcularse a continuación (la suma variará pues de 2 a 12, siendo éstos los
valores menos frecuentes así como 7 el más frecuente). Haz una simulación con 36.000
lanzamientos y muestra el número de veces que aparece cada una de las combinaciones.

9.Mejora el ejercicio anterior para además mostrar una tabla bidimensional que muestre las
combinaciones (no sólo la suma) que se han ido dando (ahora sí podemos usar arrays
bidimensionales). */

/**
 * Devuelve el resultado de la tirada de un dado d6
 */
function tirarDado() {
    return Math.floor(Math.random() * 6 +1);
}


function tiradas2Dados (){
    let combinaciones = Array(6).fill(0).map( () => Array(6).fill(0));
    let dado1, dado2;

    for (let i = 0; i < 36000; i++) {
        dado1 = tirarDado();
        dado2 = tirarDado();
        combinaciones[dado1 - 1][dado2 -1]++;
    }
    return combinaciones;
}

let combinaciones = tiradas2Dados();
document.write("<table><tr>");

document.write("<td>Resultado</td>");
for (let i = 0; i < combinaciones.length; i++) {
    document.write("<td>" + (i + 1) + "</td>");
}
document.write("</tr>");

for (let i = 0; i < combinaciones.length; i++) {
    document.write("<tr><td>" + (i + 1) + "</td>");
    for (let j = 0; j < combinaciones.length; j++) {
        document.write("<td>" + combinaciones[i][j] + "</td>");
    }
    document.write("</tr>");
}