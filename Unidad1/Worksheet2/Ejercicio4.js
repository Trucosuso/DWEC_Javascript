/** 
 * 4. The Temperature Converter
 * 
 * It's hot out! Let's make a converter, and again you'll have to search the internet how to do it.
 * 
 * - Store a celsius temperature into a variable.
 * - Convert it to fahrenheit and output "NN°C is NN°F".
 * - Now store a fahrenheit temperature into a variable.
 * - Convert it to celsius and output "NN°F is NN°C."
*/

var celsius = parseFloat(prompt("Introduzca la temperatura en celsius"));
var fahrenheit = (celsius * 9/5)+32;
document.write(celsius+"°C is "+fahrenheit+"°F");

document.write("<br>");

fahrenheit = parseFloat(prompt("Introduzca la temperatura en fahrenheit"));
celsius = (fahrenheit-32)*5/9;
document.write(fahrenheit+"°F is "+celsius+"°C");