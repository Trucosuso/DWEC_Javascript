/**
 * Se desea realizar mediante DOM un visor de imágenes.
 * Para ello en tu página se mostrará una imagen, junto a dos botones “Siguiente” y “Anterior”.
 * Impleméntala la funcionalidad para poder navegar entre un conjunto de imágenes que tendrás previamente preparadas.
 */

var rutasImagenes = [];
for (let i = 1; i <= 8; i++) {
    rutasImagenes[i] = "imagen" + i + ".jpg";
}
var imagenActual = 1;

var imagen = document.createElement("img");
imagen.src = rutasImagenes[imagenActual];
imagen.style.height = "60vh";

window.addEventListener("load", () => {
    document.getElementById("siguiente").addEventListener("click", imagenSiguiente);
    document.getElementById("anterior").addEventListener("click", imagenAnterior);
    document.getElementById("visor").appendChild(imagen);
});

function imagenSiguiente() {
    imagenActual++;
    if (imagenActual == rutasImagenes.length) {
        imagenActual = 1;
    }
    imagen.src = rutasImagenes[imagenActual];
}

function imagenAnterior() {
    imagenActual--;
    if (imagenActual == 0) {
        imagenActual = rutasImagenes.length - 1;
    }
    imagen.src = rutasImagenes[imagenActual];
}