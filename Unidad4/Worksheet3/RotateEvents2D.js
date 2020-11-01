function inicio() {
    var el = document.getElementById("canvas");
    el.addEventListener("touchstart", handleStart, false);
    el.addEventListener("touchend", handleEnd, false);
    el.addEventListener("touchmove", handleMove, false);
    el.addEventListener("click", click);
    if (window.DeviceOrientationEvent){
        window.addEventListener("deviceorientation", orientacion);
    }
}

/**
 * 
 * @param {DeviceOrientationEvent} evt 
 */
function orientacion(evt) {
    document.getElementById("log").innerHTML = "Orientación del dispositivo:<br> Alpha: " + evt.alpha.toFixed(0) + "º, Beta: " + evt.beta.toFixed(0) + "º, Gamma: " + evt.gamma.toFixed(0) + "º";
    document.getElementById("canvas").style.transform = "rotate("+ evt.alpha+"deg)";
}

window.onload = inicio;

/**
 * 
 * @param {TouchEvent} evt 
 */
function handleStart(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML = "Touch start " + evt.touches[0].pageX + " " + evt.touches[0].pageY;
}

/**
 * 
 * @param {TouchEvent} evt 
 */
function handleEnd(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML = "Touch end";
}

/**
 * 
 * @param {TouchEvent} evt 
 */
function handleMove(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML = "Touch move " + evt.touches[0].pageX + " " + evt.touches[0].pageY;
}

function click() {
    document.getElementById("log").innerHTML = "Click";
}