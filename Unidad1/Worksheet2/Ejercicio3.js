/** 
 * 3. The Geometrizer
 * 
 * Calculate properties of a circle, searching the internet for definitions if not remember.
 * 
 * - Store a radius into a variable.
 * - Calculate the circumference based on the radius, and output "The circumference is NN".
 * - Calculate the area based on the radius, and output "The area is NN".
*/

var radius = prompt("Introduzca el valor del radio");

circumference(radius);
area(radius);
console.log(Math.PI);


function circumference(r) {
    document.write("<p>The circumference is " + (2*Math.PI*r) + "</p>");
}

function area(r) {
    document.write("<p>The area is " + (Math.PI*r*r) + "</p>");
}