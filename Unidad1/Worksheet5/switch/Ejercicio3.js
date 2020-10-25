var numeroA = parseFloat(prompt("Introduzca un número"));
var numeroB = parseFloat(prompt("Introduzca otro número"));

var operacion = prompt("Introduzca la operación a realizar (+, -, * ó /)");

switch (operacion) {
    case "+":
        document.write(numeroA+"+"+numeroB+" = "+(numeroA+numeroB));
        break;
    case "-":
        document.write(numeroA+"-"+numeroB+" = "+(numeroA-numeroB));
        break;
    case "*":
        document.write(numeroA+"*"+numeroB+" = "+(numeroA*numeroB));
        break;
    case "/":
        document.write(numeroA+"/"+numeroB+" = "+(numeroA/numeroB));
        break;
    default:
        document.write("Operación no reconocida");
        break;
}