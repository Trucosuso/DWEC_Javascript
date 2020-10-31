/**
 * 9. Crea una página web que haciendo uso de eventos permita arrastrar una imagen haciendo uso del ratón (al pulsar sobre la imagen la voy arrastrando hasta que suelto el botón).
 * 10. Mejora el ejercicio anterior para que se pueda hacer en una página con un número cualquiera de imágenes.
 */

/** @type {Boolean} **/
var arrastrando = false;

/** @type {HTMLImageElement} **/
var imagenEnMovimiento = null;

function main(e) {
    

    /** @type {Array.<HTMLImageElement>} **/
    var imagenes = document.querySelectorAll("img");

    imagenes.forEach(imagen => {
        imagen.addEventListener("click", imagenPulsada);
    });
    window.addEventListener("mousemove", muevoRaton);
}

/**
 * 
 * @param {MouseEvent} e 
 */
function imagenPulsada(e) {
    arrastrando = !arrastrando;
    imagenEnMovimiento = e.currentTarget;
}

/**
 * 
 * @param {MouseEvent} e 
 */
function muevoRaton(e) {
    if (arrastrando) {
        imagenEnMovimiento.style.marginLeft = (e.x - 20) + "px";
        imagenEnMovimiento.style.marginTop = (e.y - 20) + "px";
    }
}

window.addEventListener("load", main);