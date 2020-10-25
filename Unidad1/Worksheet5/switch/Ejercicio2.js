var numero = parseInt(prompt("Introduzca un número"));

switch (true) {
    case (numero%2==0):
        document.write("El número "+numero+" es par");
        break;
    case (numero%3==0):
        document.write("El número "+numero+" es múltiplo de tres");
        break;
    case (numero%5==0):
        document.write("El número "+numero+" es múltiplo de 5");
        break;
    default:
        document.write("El número "+numero+" no es múltiplo de 2, 3 o 5");
        break;
}