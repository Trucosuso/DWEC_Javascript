var options = {
    enableHighAccuracy: true,
    timeout: 3000,
    maximumAge: 0
};

function success(pos) {
    var crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    var map = L.map("mapid").setView([crd.latitude, crd.longitude], 16);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors"
    }).addTo(map);

    L.marker([crd.latitude, crd.longitude]).addTo(map)
        .bindPopup("Aquí estamos.")
        .openPopup();

    var circle = L.circle([crd.latitude, crd.longitude], {
        color: "blue",
        fillColor: "blue",
        fillOpacity: 0.25,
        radius: crd.accuracy/2
    }).addTo(map);
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}



navigator.geolocation.getCurrentPosition(success, error, options);

