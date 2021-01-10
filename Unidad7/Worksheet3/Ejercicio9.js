/*  9. Crea un documento con dos botones, start y stop. Mediante el primero se debe producir la
siguiente animación. Debe aparecer un elemento div cuadrado de 40 x 40, desplazarse a la
izquierda 200 px, cambiar de color a azul y ocultarse desplazándose hacia arriba. */

window.addEventListener("load", () => {
    $("#start").on("click", animaDiv);
    $("#stop").on("click", () => {
        $("div").stop(true);
    });
});

function animaDiv() {
    $("div").fadeIn("slow")
        .animate({
            left: "-=200"
        }, "slow", function () {
            $(this).css("background-color", "blue");
        })
        .slideUp("slow");
}