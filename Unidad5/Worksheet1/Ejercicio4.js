/* Crea una web con una lista de elementos y un botón que cada vez que
 * pulsemos introduzca una entrada nueva en la lista. */

window.addEventListener("load", () => {
    document.getElementById("botonAñadir").addEventListener("click", añadirElementoALista);
});

function añadirElementoALista() {
    // Creamos un textnode con el valor del input y lo añadimos a la lista
    let elemento = document.createTextNode(document.getElementById("elemento").value);
    let li = document.createElement("li");
    li.appendChild(elemento);
    document.getElementById("lista").appendChild(li);
    document.getElementById("elemento").value = "";
}
