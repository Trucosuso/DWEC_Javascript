/* Crea una página que contenga varios enlaces, imágenes y anclas de ejemplo y añade una serie de enlaces que realicen lo siguiente */
// 2c
function numeroImagenes() {
    alert("Número de imágenes: "+document.images.length);
}

// 2d
function idPrimeraImagen() {
    alert("Id de la primera imagen: "+document.images[0].id);
}

// 2e
function numeroEnlaces() {
    alert("Número de enlaces: "+document.links.length);
}

//2f
function cambiarTitulo() {
    document.title="Título cambiado";
}