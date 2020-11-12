/** 
 * Estás diseñando una aplicación web para subir ficheros al servidor.
 * Haciendo uso de DOM, consigue que el usuario pueda adjuntar tantos ficheros como desee.
 * Por tanto inicialmente será necesario un input de tipo fichero, un botón “Adjuntar otro fichero”
 * y un segundo botón “Enviar”, de modo que al pulsar el primero de los botones 
 * automáticamente aparezca otro input para elegir fichero.
 */

window.addEventListener("load", () => {
    document.getElementById("subirMasArchivos").addEventListener("click", añadirNuevoInput);
});

function añadirNuevoInput() {
    // Creamos un textnode con el valor del input y lo añadimos a la lista
    let input = document.createElement("input");
    input.type = "file";

    document.getElementById("inputs").appendChild(input);
    document.getElementById("inputs").appendChild(document.createElement("br"));
}
