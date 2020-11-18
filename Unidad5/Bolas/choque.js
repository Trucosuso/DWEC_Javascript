/**
 * Debes crear una web, que haciendo uso de SVG, muestre una bola en movimiento por la pantalla.
 * Debe desplazarse tanto en X como en Y, y rebotar al llegar a los límites del area definida por el tag SVG. Una vez conseguido, modifica el código para animar al menos 3 bolas simultáneamente.
 */
// Número total de bolas
const numBolas = 50;
// Densidad superficial para calcular la masa de las bolas
const densidadSuperficial = 0.01;

// Variables globales donde guardar los datos de las bolas y del marco
var bolas = [];
var radios = [];
var posiciones = [];
var posicionesAnteriores = [];
var masas = [];
var velocidades = [];
var marco = [];


window.addEventListener("load", () => {
    // Añadir marco
    let svg = document.getElementById("espacio");
    marco[0] = parseInt(svg.getAttribute("height"));
    marco[1] = parseInt(svg.getAttribute("width"));
    let rectangulo = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rectangulo.setAttribute("height", marco[0]);
    rectangulo.setAttribute("width", marco[1]);
    rectangulo.setAttribute("fill-opacity", 0);
    rectangulo.setAttribute("stroke", "black");
    svg.appendChild(rectangulo);

    // Añadir bolas al vector y al html
    for (let i = 0; i < numBolas; i++) {
        // Si la bola está encima de una bola ya añadida ponerla en otra posición
        do {
            // Radio de la bola
            radios[i] = numAleatorio(10, 20);
            // Posición de la bola
            posiciones[i] = [numAleatorio(radios[i], marco[0] - radios[i]), numAleatorio(radios[i], marco[1] - radios[i])];
        } while (pisaAOtraBola(bolas, posiciones[i], radios[i]));
        // Para guardar la posicion anteriores
        posicionesAnteriores[i] = new Array(2);
        // Velocidad de la bola
        velocidades[i] = [numAleatorio(-1, 1), numAleatorio(-1, 1)];
        // Establecer la masa de la bola utilizando la densidad superficial proporcionada
        masas[i] = Math.PI * Math.pow(radios[i], 2) * densidadSuperficial;
        // Crear bola y añadirla tanto al vector como al svg
        let bola = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        bola.setAttribute("cx", posiciones[i][0]);
        bola.setAttribute("cy", posiciones[i][1]);
        bola.setAttribute("r", radios[i]);
        bola.setAttribute("fill", getRandomColor());
        bola.id = i;
        svg.appendChild(bola);
        bolas.push(bola);
    }

    // Ejecutar animacion
    setInterval(anima, 5);
});

/**
 * Comprueba si la bola está encima de alguna ya creada. True si la pisa, false si no.
 * @param {Array} bolas 
 * @param {Array} posiciones 
 * @param {Number} radio 
 * @returns {Boolean}
 */
function pisaAOtraBola(bolas, posicion, radio) {
    for (let i = 0; i < bolas.length; i++) {
        // Vector posicion relativa entre las dos bolas. Para calcular distancia.
        let posicionRelativa = [posicion[0] - posiciones[i][0], posicion[1] - posiciones[i][1]];
        let distancia = Math.sqrt(Math.pow(posicionRelativa[0], 2) + Math.pow(posicionRelativa[1], 2));

        // Si se devuelve true
        if (distancia <= (radios[i] + radio)) {
            return true;
        }
    }
    return false;
}

/**
 * Función que realiza la animación
 */
function anima() {
    // Calcular energía cinética del sistema
    let diferenciaEnergia = calcularEnergiaSistema(bolas);
    // Comprueba el choque entre las bolas y actualiza su velocidad si es necesario
    comprobarChoque(bolas);

    // Comprobar que las bolas no se salgan del borde
    for (let i = 0; i < bolas.length; i++) {
        if (posiciones[i][0] + radios[i] > marco[0] || posiciones[i][0] - radios[i] <= 0) {
            posiciones[i][0] = posicionesAnteriores[i][0];
            velocidades[i][0] *= -1;
        }
        if (posiciones[i][1] + radios[i] > marco[1] || posiciones[i][1] - radios[i] <= 0) {
            posiciones[i][1] = posicionesAnteriores[i][1];
            velocidades[i][1] *= -1;
        }
    }

    // Guardar y actualizar posiciones
    for (let i = 0; i < bolas.length; i++) {
        posicionesAnteriores[i][0] = posiciones[i][0];
        posicionesAnteriores[i][1] = posiciones[i][1];
        posiciones[i][0] += velocidades[i][0];
        posiciones[i][1] += velocidades[i][1];
    }

    // Mover bolas
    for (let i = 0; i < bolas.length; i++) {
        bolas[i].setAttribute("cx", posiciones[i][0]);
        bolas[i].setAttribute("cy", posiciones[i][1]);
    }
    // Calcular la diferencia de energía cinética en el sistema para comprobar que funciona correctamente
    diferenciaEnergia -= calcularEnergiaSistema(bolas);
    // console.log(diferenciaEnergia);
}

/**
 * Comprobar si hay choques entre las bolas
 * @param {Array} bolas 
 */
function comprobarChoque(bolas) {
    for (let i = 0; i < bolas.length; i++) {
        for (let j = i + 1; j < bolas.length; j++) {
            // Vector posicion relativa entre las dos bolas. Para calcular distancia.
            let posicionRelativa = [posiciones[j][0] - posiciones[i][0], posiciones[j][1] - posiciones[i][1]];
            let distancia = Math.sqrt(Math.pow(posicionRelativa[0], 2) + Math.pow(posicionRelativa[1], 2));

            // Si se produce el choque se realiza el resto de cálculos. Según https://en.wikipedia.org/wiki/Elastic_collision#Two-dimensional_collision_with_two_moving_objects
            if (distancia <= (radios[j] + radios[i])) {
                posiciones[i][0] = posicionesAnteriores[i][0];
                posiciones[i][1] = posicionesAnteriores[i][1];
                posiciones[j][0] = posicionesAnteriores[j][0];
                posiciones[j][1] = posicionesAnteriores[j][1];
                // Coeficientes para calcular las nuevas velocidades
                let coeficiente1 = productoEscalar2D(velocidades[i][0] - velocidades[j][0], velocidades[i][1] - velocidades[j][1], posiciones[i][0] - posiciones[j][0], posiciones[i][1] - posiciones[j][1]);
                coeficiente1 /= productoEscalar2D(posiciones[i][0] - posiciones[j][0], posiciones[i][1] - posiciones[j][1], posiciones[i][0] - posiciones[j][0], posiciones[i][1] - posiciones[j][1]);

                let coeficiente2 = productoEscalar2D(velocidades[j][0] - velocidades[i][0], velocidades[j][1] - velocidades[i][1], posiciones[j][0] - posiciones[i][0], posiciones[j][1] - posiciones[i][1]);
                coeficiente2 /= productoEscalar2D(posiciones[j][0] - posiciones[i][0], posiciones[j][1] - posiciones[i][1], posiciones[j][0] - posiciones[i][0], posiciones[j][1] - posiciones[i][1]);

                // Actualizar velocidades
                velocidades[i][0] -= coeficiente1 * (posiciones[i][0] - posiciones[j][0]) * (2.0 * masas[j]) / (masas[i] + masas[j]);
                velocidades[j][0] -= coeficiente2 * (posiciones[j][0] - posiciones[i][0]) * (2.0 * masas[i]) / (masas[i] + masas[j]);
                velocidades[i][1] -= coeficiente1 * (posiciones[i][1] - posiciones[j][1]) * (2.0 * masas[j]) / (masas[i] + masas[j]);
                velocidades[j][1] -= coeficiente2 * (posiciones[j][1] - posiciones[i][1]) * (2.0 * masas[i]) / (masas[i] + masas[j]);
            }
        }
    }
}

/**
 * 
 * @param {Number} x1 Primera coordenada del primer vector
 * @param {Number} y1 Primera coordenada del segundo vector
 * @param {Number} x2 Segunda coordenada del primer vector
 * @param {Number} y2 Segunda coordenada del segundo vector
 * @returns {Number}
 */
function productoEscalar2D(x1, y1, x2, y2) {
    return x1 * x2 + y1 * y2;
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
 * @param {Array} bolas 
 * @returns {Number}
 */
function calcularEnergiaSistema(bolas) {
    let energiaTotal = 0;
    for (let i = 0; i < bolas.length; i++) {
        let moduloVelocidad = Math.sqrt(Math.pow(velocidades[i][0],2)+velocidades[i][1]);
        energiaTotal = 0.5*masas[i]*Math.pow(moduloVelocidad, 2);
    }
    return energiaTotal;
}