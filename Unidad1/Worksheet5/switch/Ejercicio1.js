var mes = prompt("Introduzca el nombre de un mes");
var numDias;

switch (mes.toLowerCase()) {
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        numDias = 31;
        break;
    case "febrero":
        numDias = 28;
        break;
    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
        numDias = 30;
        break;
    default:
        document.write("No existe el mes "+mes);
        numDias = 0;
        break;
}
if (numDias!=0){
    document.write("El mes "+mes+" tiene "+numDias+" días.");
}
