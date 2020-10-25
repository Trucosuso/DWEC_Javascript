// Write a function that can take in any number of arguments, and returns the sum of all of the arguments.
function suma(...numeros) {
    let total = 0;
    for (const numero of numeros) {
        total += numero;
    }
    return total;
}
console.log("Suma " + suma(1, 2, 3));

// Write a function called addOnlyNums that can take in any number of arguments (including numbers or strings), and returns the sum of only the numbers.
function addOnlyNums(...numerosUOtraCosa) {
    let total = 0;
    for (const numero of numerosUOtraCosa) {
        /*if (!isNaN(numero)){
            total += parseFloat(numero);
        }*/
        // Otra forma
        if (typeof(numero)=="number"){
            total += parseFloat(numero);
        }
    }
    return total;
}
var sumaOnlyNums = addOnlyNums(1, "cat", 3, 4, "5", 6, "7"); //8
console.log("Suma solo números " + sumaOnlyNums);

// Write a function called `countTheArgs` that can take any number of arguments, and returns the number of arguments that are passed in.
function countTheArgs(...argumentos) {
    return argumentos.length;
}
console.log("Argumentos: " + countTheArgs("cat", "dog", "frog", "bear")); //4

// Write a function called combineTwoArrays that takes in two arrays as arguments, and returns a single array that combines both (using the spread operator).
function combineTwoArrays(array1, array2){
    return [...array1,...array2];
}
console.log("Combinar dos arrays: "+combineTwoArrays([1, 2, 3, 4], [5, 6, 7, 8]));

// Write a function called sumEveryOther that takes in any amount of arguments, and returns the sum of every other argument.
function sumEveryOther(...numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i+=2) {
        suma += numeros[i];
    }
    return suma;
}
console.log("SumEveryOther: " + sumEveryOther(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Write a function called onlyUniques that can take in any number of arguments, and returns an array of only the unique arguments.
function onlyUniques(...argumentos) {
    let uniques = [];
    for (const argumento of argumentos) {
        if(!uniques.includes(argumento)){
            uniques.push(argumento);
        }
    }
    return uniques;
}
console.log("OnlyUniques: " + onlyUniques("hola", "adios", 1, 2, 3, "hola", "HOLA", 123, 3, 2, 1));

// Write a function called combineAllArrays that takes in any number of arrays as arguments and combines all of them into one array.
function combineAllArrays(...vectores) {
    let vectorCombinado = [];
    for (const vector of vectores) {
        for (const elemento of vector) {
            vectorCombinado.push(elemento);
        }
    }
    return vectorCombinado;
}
console.log(combineAllArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 32, 12, 32], ["a", "b", "c"]));

// Write a function called squareAndSum that takes in any number of arguments, squares them, then sums all of the squares.
function squareAndSum(...numeros) {
    let sumaCuadrados = 0;
    for (const numero of numeros) {
        sumaCuadrados += numero**2;
    }
    return sumaCuadrados;
}
console.log(squareAndSum(2, 4, 3));
