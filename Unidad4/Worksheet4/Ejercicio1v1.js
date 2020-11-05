window.addEventListener("load", main);

function main() {
    temaNormal();
    document.getElementById("temaNormal").addEventListener("click", temaNormal);
    document.getElementById("temaMinimalista").addEventListener("click", temaMinimalista);
}

function temaNormal() {
    // Todo el body
    document.body.style.fontFamily = "sans-serif";
    document.body.style.fontSize = "1em";
    document.body.style.backgroundColor = "#ffffcc";

    // Barra lateral
    let barraLateral = document.getElementById("barraLateral");
    barraLateral.style.display = "initial";
    barraLateral.style.width = "15vw";
    barraLateral.style.height = "104vh";
    barraLateral.style.float = "left";
    barraLateral.style.background = "linear-gradient(#0ff 1px, transparent 1px),#00f";
    barraLateral.style.backgroundSize = "2px 2px";
    barraLateral.style.marginTop = "-5vh";
    barraLateral.style.marginLeft = "-5vw";

    // Contenido
    let contenido = document.getElementById("contenido");
    contenido.style.marginLeft = "11.5vw";

    // Div de arriba con los botones para cambiar de tema
    var divCambioTemas = document.getElementById("divCambioTemas");
    divCambioTemas.style.marginTop = "10px";
    divCambioTemas.style.backgroundColor = "lightblue";
    divCambioTemas.style.border = "outset 2px lightblue";

    // Botones de arriba para cambiar de tema
    let botonTemaNormal = document.getElementById("temaNormal");
    botonTemaNormal.style.fontWeight = "bold";
    botonTemaNormal.style.textDecoration = "none";
    let botonTemaMinimalista = document.getElementById("temaMinimalista");
    botonTemaMinimalista.style.fontWeight = "bold";
    botonTemaMinimalista.style.textDecoration = "none";

    // Párrafo visible
    document.getElementById("textoNegrita").style.fontWeight = "bold";
    document.getElementById("tercerParrafo").style.display = "initial";

    // Párrafo en marco
    let parrafoMarco = document.getElementById("parrafoMarco");
    parrafoMarco.style.backgroundColor = "yellow";
    parrafoMarco.style.border = "2px solid black";
}

function temaMinimalista() {
    // Todo el body
    document.body.style.fontFamily = "serif";
    document.body.style.fontSize = "1.5em";
    document.body.style.backgroundColor = "#ffffff";

    // Barra lateral
    let barraLateral = document.getElementById("barraLateral");
    barraLateral.style.display = "none";

    // Contenido
    let contenido = document.getElementById("contenido");
    contenido.style.marginLeft = "";

    // Div de arriba con los botones para cambiar de tema
    var divCambioTemas = document.getElementById("divCambioTemas");
    divCambioTemas.style.backgroundColor = "white";
    divCambioTemas.style.border = "none";

    // Botones de arriba para cambiar de tema
    let botonTemaNormal = document.getElementById("temaNormal");
    botonTemaNormal.style.fontWeight = "normal";
    botonTemaNormal.style.textDecoration = "underline";
    let botonTemaMinimalista = document.getElementById("temaMinimalista");
    botonTemaMinimalista.style.fontWeight = "normal";
    botonTemaMinimalista.style.textDecoration = "underline";

    // Párrafo visible
    document.getElementById("tercerParrafo").style.display = "none";

    // Párrafo en marco
    let parrafoMarco = document.getElementById("parrafoMarco");
    parrafoMarco.style.backgroundColor = "white";
    parrafoMarco.style.border = "none";
}