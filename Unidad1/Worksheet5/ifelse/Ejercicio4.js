var numHermanos = prompt("Introduzca el número de hermanos");
var cantidad = prompt("Introduzca una cantidad");

if (numHermanos > 3){
    alert(cantidad-cantidad*0.15);
} else if (numHermanos > 0){
    alert(cantidad-cantidad*0.05);
} else {
    alert(cantidad);
}