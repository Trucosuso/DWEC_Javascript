// Número aleatorio entre 0 y 1
document.write(Math.random()+"<br>");

// Número aleatorio entre 100 y 200
document.write(Math.floor((Math.random()*100)+100)+"<br>");

// Número aleatorio entre dos dados por el usuario
let min = parseInt(prompt("Introduzca el número menor"));
let max = parseInt(prompt("Introduzca el número mayor"));
document.write(Math.floor(Math.random()*(max - min) + min)+"<br>");