window.addEventListener("load", main);

function main() {
    temaNormal();
    document.getElementById("temaNormal").addEventListener("click", temaNormal);
    document.getElementById("temaMinimalista").addEventListener("click", temaMinimalista);
}

function temaNormal() {
    var _head = document.getElementsByTagName("head")[0];
    var _link = document.createElement("link");
    _link.type = "text/css";
    _link.href = "normal.css";
    _link.rel = "stylesheet";
    _head.appendChild(_link);
}

function temaMinimalista() {
    var _head = document.getElementsByTagName("head")[0];
    var _link = document.createElement("link");
    _link.type = "text/css";
    _link.href = "minimalista.css";
    _link.rel = "stylesheet";
    _head.appendChild(_link);
}