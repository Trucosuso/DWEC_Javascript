/*  7. Crea un documento en el que se produzcan 4 animaciones mediante un botón y mediante un
segundo botón se elimine la cola de animaciones. */

window.addEventListener("load", () => {
    let botones = $("button");
    $(botones[0]).on("click", animarDiv);
    $(botones[1]).on("click", function () {
        $("div").stop(true);
    });
});


function animarDiv() {
    let div = $("div");

    $(div).animate({ 
        opacity: 0.25,
        left: "+=100",
        height: "10"
    }, 3000, function () {
        console.log("Animación 1 terminada");
    });

    $(div).animate({ 
        opacity: 0.75,
        left: "+=200",
        height: "150"
    }, 4000, function () {
        console.log("Animación 2 terminada");
    });

    $(div).animate({ 
        opacity: 0.25,
        width: "+=200",
    }, 2000, function () {
        console.log("Animación 3 terminada");
    });

    $(div).animate({
        opacity: 1,
        left: "+=200"
    }, 6000, function () {
        console.log("Animación 4 terminada");
    });

}