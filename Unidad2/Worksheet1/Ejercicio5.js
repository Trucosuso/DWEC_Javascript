function reloj() {
    let ahora = new Date();
    document.write(ahora.getHours() + ":" + ahora.getMinutes() + ":" + ahora.getSeconds());
    setTimeout(reloj,1000);
}

reloj();