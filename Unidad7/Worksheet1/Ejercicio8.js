window.addEventListener("load", () => {
    // Cambiar el tamaño de la fuente de las noticias. Tres tamaños
    let noticias = $("div");

    $(noticias[0]).css("font-size", "0.8rem");
    $(noticias[2]).css("font-size", "1.2rem");

    // Mostrar y ocultar noticia al pulsar sobre cada título
    noticias.find("h3").on("click", function() {
        $(this).next().toggle();
    });

    // Al colocar el ratón sobre el texto de la noticia cambiar el color de esta. Volver al color original cuando salga el ratón.
    noticias.find("p")
        .on("mouseenter", function() {
            $(this).parent().css("background-color", "red");
        })
        .on("mouseout", function() {
            $(this).parent().css("background-color", "");
        });
});