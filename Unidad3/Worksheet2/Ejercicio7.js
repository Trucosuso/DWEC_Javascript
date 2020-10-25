/* 7.Escribe las funciones para llevar a cabo las siguientes operaciones para un array de una
dimensión:
a) Establecer los 10 elementos del array a cero.
b) Añadir 1 a cada uno de los elementos del array.
c) Muestra los valores del array separados por espacios. */

/**
 * 
 * @param {Array<Number>} array 
 */
function inicializarArray(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = 0;
    }
}

/**
 * 
 * @param {Array<Number>} array 
 */
function añadir1(array) {
    for (let i = 0; i < array.length; i++) {
        array[i]++;
    }
}

/**
 * 
 * @param {Array<Number>} array 
 */
function mostarArrayConEspacios(array) {
    document.write(array.join(" ") + "<br>");
}

let array = new Array(10);
inicializarArray(array);
mostarArrayConEspacios(array);
añadir1(array);
mostarArrayConEspacios(array);