/*  8. Mediante una cola de 5 métodos fadeIn() aplicados sobre 5 elementos div cuadrados,
establecer un retraso “slow”, “fast”, 800 ms, 2000 ms y 4000 ms. respectivamente. */

window.addEventListener("load", () => {
    $("div:eq(0)").fadeIn("slow").promise().then( () => {
        $("div:eq(1)").fadeIn("fast").promise().then( () => {
            $("div:eq(2)").fadeIn(800).promise().then( () => {
                $("div:eq(3)").fadeIn(2000).promise().then( () => {
                    $("div:eq(4)").fadeIn(4000);
                });
            });
        });
    });
});