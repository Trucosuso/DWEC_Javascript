window.addEventListener("load", main);

function main() {
    document.getElementById("alignLeft").addEventListener("click", alignLeft);
    document.getElementById("alignCenter").addEventListener("click", alignCenter);
    document.getElementById("alignRight").addEventListener("click", alignRight);
    document.getElementById("alignJustify").addEventListener("click", alignJustify);
    document.getElementById("reduceSize").addEventListener("click", reduceSize);
    document.getElementById("defaultSize").addEventListener("click", defaultSize);
    document.getElementById("increaseSize").addEventListener("click", increaseSize);
}

function alignLeft() {
    document.body.style.textAlign = "left";
}

function alignCenter() {
    document.body.style.textAlign = "center";
}

function alignRight() {
    document.body.style.textAlign = "right";
}

function alignJustify() {
    document.body.style.textAlign = "justify";
}

function reduceSize() {
    let size = parseFloat(document.body.style.fontSize);
    if (isNaN(size)) {
        size = 1;
    }
    size -= 0.1;
    document.body.style.fontSize = size + "rem";

}

function defaultSize() {
    document.body.style.fontSize = "1rem";
}

function increaseSize() {
    let size = parseFloat(document.body.style.fontSize);
    if (isNaN(size)) {
        size = 1;
    }
    size += 0.1;
    document.body.style.fontSize = size + "rem";
}