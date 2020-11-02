function inicio() {
    if (window.DeviceOrientationEvent) {
        let elem = document.getElementById("3DElement");

        window.addEventListener("deviceorientation", function (e) {
            elem.style.transform =
                "rotateZ(" + e.alpha + "deg) " +
                "rotateX(" + e.beta + "deg) " +
                "rotateY(" + (-e.gamma) + "deg)";
        });
    }
}

window.onload = inicio;
