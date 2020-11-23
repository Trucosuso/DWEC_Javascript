/**
 * Haciendo uso de la clase, crea 100 bolas, cada una con un color y una dirección aleatoria, y haz que se animen simultaneamente.
 */
import { BallSVG } from "./bolas.js";

// Número total de bolas
const numBolas = 50;
// Densidad superficial para calcular la masa de las bolas
const densidadSuperficial = 0.01;
/** @type {Array<BallSVG>} Vector donde guardar las bolas*/
var bolas = [];
// Vector donde guardar los datos del marco
var marco = [];


window.addEventListener("load", () => {
    // Añadir rectángulo al marco
    let svg = document.getElementById("espacio");
    marco[0] = parseInt(svg.getAttribute("height"));
    marco[1] = parseInt(svg.getAttribute("width"));
    let rectangulo = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rectangulo.setAttribute("height", marco[0]);
    rectangulo.setAttribute("width", marco[1]);
    rectangulo.setAttribute("fill-opacity", 0);
    rectangulo.setAttribute("stroke", "black");
    svg.appendChild(rectangulo);

    // Crear las bolas, añadirlas al vector y pintarlas
    for (let i = 0; i < numBolas; i++) {
        // Nueva bola
        let nuevaBola = null;

        // Velocidad de la bola
        let velocidad = [numAleatorio(-1, 1), numAleatorio(-1, 1)];

        // Color de la bola
        let color = getRandomColor();

        // Guarda si la bola colisiona
        let colisiona = false;

        // Si la bola está encima de una bola ya añadida ponerla en otra posición
        do {
            // Radio de la bola
            let radio = numAleatorio(5, 30);
            // Establecer la masa de la bola utilizando la densidad superficial proporcionada
            let masa = Math.PI * Math.pow(radio, 2) * densidadSuperficial;
            // Posición de la bola
            let posicion = [numAleatorio(radio, marco[0] - radio), numAleatorio(radio, marco[1] - radio)];
            nuevaBola = new BallSVG(posicion, velocidad, radio, masa, color, i, svg);

            // Comprobar si colisiona con otra bola
            colisiona = BallSVG.colidesWithArray(nuevaBola, bolas);
        } while (colisiona);

        // Pintar la bola y añadirla al vector
        nuevaBola.fisrtDraw();
        bolas.push(nuevaBola);
    }

    // Ejecutar animacion
    window.requestAnimationFrame(anima);
});

/**
 * Función que realiza la animación
 */
function anima() {
    // Calcular energía cinética del sistema
    let diferenciaEnergia = calcularEnergiaSistema(bolas);

    // Mover bolas
    for (const bola of bolas) {
        bola.move();
    }

    // Comprueba si las bolas chocan y resuelve el choque si es así
    for (let i = 0; i < bolas.length; i++) {
        for (let j = i + 1; j < bolas.length; j++) {
            if (BallSVG.colides(bolas[i], bolas[j])) {
                BallSVG.resolveCollision(bolas[i], bolas[j]);
            }
        }
    }

    // Las bolas rebotan en el borde
    for (const bola of bolas) {
        if (bola.position[0] + bola.radius > marco[0] || bola.position[0] - bola.radius < 0) {
            bola.position[0] = bola.previousPosition[0];
            bola.velocity[0] *= -1;
        }
        if (bola.position[1] + bola.radius > marco[1] || bola.position[1] - bola.radius < 0) {
            bola.position[1] = bola.previousPosition[1];
            bola.velocity[1] *= -1;
        }
    }

    // Calcular la diferencia de energía cinética en el sistema para comprobar que funciona correctamente
    diferenciaEnergia -= calcularEnergiaSistema(bolas);
    console.log(diferenciaEnergia);
    window.requestAnimationFrame(anima);
}

/**
 * Devuelve un número aleatorio entre los números indicados
 * @param {Number} min Número mínimo
 * @param {Number} max Número máximo
 * @returns {Number}
 */
function numAleatorio(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Devuelve un color aleatorio en hex
 * @returns {String} Color aleatorio en hex
 */
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/**
 * Calcular la energía del sistema
 * @param {Array<BallSVG>} bolas 
 * @returns {Number}
 */
function calcularEnergiaSistema(bolas) {
    let energiaTotal = 0;
    for (const bola of bolas) {
        let moduloVelocidad = Math.sqrt(Math.pow(bola.velocity[0], 2) + Math.pow(bola.velocity[1], 2));
        energiaTotal += 0.5 * bola.mass * Math.pow(moduloVelocidad, 2);
    }
    return energiaTotal;
}