/* 3.Para demostrar que todos deben tener similar probabilidad, mejora la web anterior de
modo que se pueda generar una simulación de 6000 tiradas, mostrando al final el no
de ocurrencias de cada uno de los valores. */

function lanzamiento() {
    return Math.floor(Math.random()*6+1);
}

// Vector para guardar las ocurrencias donde el elemento 0 guarda las veces que ha salido el 1
// y el elemento 5 guarda las veces que ha salido el 6
let ocurrencias = [0, 0, 0, 0, 0, 0];

for (let i = 0; i < 6000; i++) {
    let tirada = lanzamiento();
    ocurrencias[tirada-1]++;
}

for (let i = 0; i < 6; i++) {
    document.write("<p>Veces que ha salido el " + (i + 1) + ": " + ocurrencias[i] + "<p>");
}

