/* 5.Crear una función llamado paresImpares que cree un array de 100 números aleatorios del 1
al 1000. Una vez creado, mostrar el contenido y después organizarlo de forma que estén
juntos los elementos pares y los impares. Después, volver a mostrar el array */

function paresImpares() {
    let arrayParesImpares = new Array(100);
    
    // Generamos el vector
    for (let i = 0; i < arrayParesImpares.length; i++) {
        arrayParesImpares[i] = Math.floor(Math.random() * 1000 + 1);
        
    }
    document.write("<p>" + arrayParesImpares + "</p>");

    // Ordenamos el vector
    arrayParesImpares.sort((a, b) => a % 2 - b % 2 || a - b);
    document.write("<p>" + arrayParesImpares + "</p>");
}

paresImpares();