/* 6.Crea una función para calcular potencias de un modo recursivo. */

/**
 * 
 * @param {Number} base 
 * @param {Number} exponente 
 */
function potenciaRecursiva(base, exponente) {
    if (exponente == 0) {
        return 1;
    }
    return base*potenciaRecursiva(base, exponente-1);
}

document.write(potenciaRecursiva(7, 6));