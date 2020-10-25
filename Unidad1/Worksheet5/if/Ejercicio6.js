var edad = prompt("Introduzca su edad");
var localidad = prompt("Introduzca su localidad de residencia");

if(localidad.toLowerCase() == "madrid" && edad >= 18 && edad <= 30){
    alert("Puede acceder al carnet de empresarios emprendedores");
}