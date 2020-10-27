/* Captura el movimiento del ratón, para que se muestre la posición en la que se
encuentra en cada momento. */

function mostrarMensaje(e) {
    console.log(`Coordenadas ratón: (${e.offsetX},${e.offsetY})`);
}   

document.addEventListener("mousemove", mostrarMensaje);