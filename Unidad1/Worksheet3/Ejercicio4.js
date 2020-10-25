/** 
 * 4. The Geometrizer
 * 
 * Create 2 functions that calculate properties of a circle.
 * 
 * Create a function called `calcCircumfrence`:
 * - Pass the radius to the function.
 * - Calculate the circumference based on the radius, and output "The circumference is NN".
 * 
 * Create a function called `calcArea`:
 * - Pass the radius to the function.
 * - Calculate the area based on the radius, and output "The area is NN".
*/

var radius = prompt("Introduzca el valor del radio");

calcCircumfrence(radius);
calcArea(radius);
console.log(Math.PI);


function calcCircumfrence(r) {
    document.write("<p>The circumference is " + (2*Math.PI*r) + "</p>");
}

function calcArea(r) {
    document.write("<p>The area is " + (Math.PI*r*r) + "</p>");
}