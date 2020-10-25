var numero = parseInt(prompt("Introduzca un número a adivinar"));

var suposicion = parseInt(prompt("Introduzca su suposicion"));

while (suposicion!=numero){
    if (suposicion < numero){
        suposicion = parseInt(prompt("Pruebe de nuevo, el número es mayor que "+suposicion));
    } else if (suposicion > numero){
        suposicion = parseInt(prompt("Pruebe de nuevo, el número es menor que "+suposicion));
    }
}
alert("Correcto ha adivinado el número "+numero);
