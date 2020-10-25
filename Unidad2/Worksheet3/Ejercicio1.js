// Apartado a
// Devuelve invertida una cadena dada por el usuario
document.write("<h3>Apartado a)</h3>");

function inverteCadena(cad_arg) {
    let cadenaInvertida = "";
    for (let i = cad_arg.length-1; i >= 0; i--) {
        cadenaInvertida += cad_arg[i]; // ¿Sería más correcto usar el charAt()?
    }
    return cadenaInvertida;
}

var cadena = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.";
document.write(cadena+"<br>");
document.write(inverteCadena(cadena));

// Apartado b
// Devuelve un string con las palabras en el mismo orden pero invertidas
document.write("<h3>Apartado b)</h3>");

function inviertePalabras(cad_arg) {
    let cadenaDividida = cad_arg.split(" ");
    let resultado = "";
    for (const palabra of cadenaDividida) {
        for (let i = palabra.length-1; i >= 0; i--) {
            resultado += palabra[i]; // ¿Sería más correcto usar el charAt()?
        }
        resultado += " ";
    }
    return resultado;
}
cadena = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.";
document.write(cadena+"<br>");
document.write(inviertePalabras(cadena));

// Apartado c
// Para una cadena de caracteres dada devuelve la longitud de la palabra más larga en ella contenida
document.write("<h3>Apartado c)</h3>");

function encuentraPalabraMasLarga(cad_arg) {
    let cadenaDividida = cad_arg.split(" ");
    let resultado = 0;
    for (const palabra of cadenaDividida) {
        if (palabra.length > resultado){
            resultado = palabra.length;
        }
    }
    return resultado;
}

cadena = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.";
document.write(cadena+"<br>");
document.write(encuentraPalabraMasLarga(cadena));

// Apartado d
// Para una cadena de caracteres y un valor numérico devuelva el número de palabras cuya longitud es mayor a i
document.write("<h3>Apartado d)</h3>");

function filtraPalabrasMasLargas(cad_arg, i) {
    let cadenaDividida = cad_arg.split(" ");
    let resultado = 0;
    for (const palabra of cadenaDividida) {
        if (palabra.length > i){
            resultado ++;
        }
    }
    return resultado;
}

cadena = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.";
document.write(cadena+"<br>");
document.write(filtraPalabrasMasLargas(cadena, 5));

// Apartado e
// Para una cadena de caracteres y un valor numérico devuelva el número de palabras cuya longitud es mayor a i
document.write("<h3>Apartado e)</h3>");

/**
 * 
 * @param {string} cad_arg Cadena a formatear
 */
function cadenaBienFormada(cad_arg) {
    return cad_arg.charAt(0).toUpperCase() + cad_arg.slice(1).toLowerCase();
}

cadena = "lorem iPSuM Dolor sit AMET, conseCTetuer adipIscing elit.";
document.write(cadena+"<br>");
document.write(cadenaBienFormada(cadena));