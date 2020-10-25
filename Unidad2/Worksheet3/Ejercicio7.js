/**
 * Función que detecta si una cadena es o no un palíndromo
 * @param {string} cadena 
 */
function esPalindromo(cadena) {
    let palindromo = true;
    let i = 0;
    cadena = cadena.replace(/\s+/g, "").toLowerCase();

    while (palindromo && i <= cadena.length/2) {
        if (cadena.charAt(i) != cadena.charAt(cadena.length-1-i)) {
            palindromo = false;
        }
        ++i;
    }
    return palindromo;
}

let cadena = "Dabale arroz a la zorra el abad";
document.write(esPalindromo(cadena));

