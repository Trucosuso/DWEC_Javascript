// Ecuación de segudo grado

let a = parseFloat(prompt("Introduzca el coeficiente a"));
let b = parseFloat(prompt("Introduzca el coeficiente b"));
let c = parseFloat(prompt("Introduzca el coeficiente c"));

let solucion1 = (-b + Math.sqrt(b*b-4*a*c))/(2*a);
let solucion2 = (-b -+ Math.sqrt(b*b-4*a*c))/(2*a);

document.write("Solución con raiz positiva: " + solucion1 + "<br>");
document.write("Solución con raiz negativa: " + solucion2 + "<br>");