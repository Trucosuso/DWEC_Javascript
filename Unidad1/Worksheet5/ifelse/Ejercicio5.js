var examen1 = parseFloat(prompt("Introduzca la nota del primer examen"));
var examen2 = parseFloat(prompt("Introduzca la nota del segundo examen"));
var trabajo1 = parseFloat(prompt("Introduzca la nota del primer trabajo"));
var trabajo2 = parseFloat(prompt("Introduzca la nota del segundo trabajo"));

var media = (examen1+examen2)/2*0.75+(trabajo1+trabajo2)/2*0.25;

if (media>5 && examen1>4.5 && examen2>4.5 && trabajo1>4.5 && trabajo2>4.5) {
    alert("Está aprobado con un "+media);
} else {
    alert("Está suspenso");
}