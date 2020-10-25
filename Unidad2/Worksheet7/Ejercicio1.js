/* 1. Develop a web app in which:
        1. Test if geolocation is available.
        2. If it's available, show the current position (latitude and longitude)
        3. If it isn't available, show a message for each and everyone of the possible errors.
        4. Improve your code so you show the position continuously (although the user could be in moving, so it could change)
        5. Find the way to meassure the distance traveled.
*/

var distance = 0;
var lastPosition;

console.log(lastPosition);

if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition(success, error, options);
} else {
    console.error("Geolocation isn't available");
}

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    var crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`Acurracy: ${crd.accuracy} meters.`);
    console.log(`Distance traveled: ${distance} meters.`);

    if(lastPosition != undefined)
        distance += calculateDistance(lastPosition, crd);
    
    lastPosition = crd;
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

/**
 * Calculate distance in meters using the haversine formula.
 * a = sin²(Δφ/2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ/2)
 * c = 2 ⋅ atan2( √a, √(1−a) )
 * d = R ⋅ c
 * @param {Position} lastPosition 
 * @param {Position} position 
 */
function calculateDistance(lastPosition, position) {
    const R = 6371e3; // Radius of the Earth in meters
    // Latitude, longitude in radians
    const lastPhi = lastPosition.latitude * Math.PI/180;
    const phi = position.latitude * Math.PI/180;
    const diffPhi = (lastPosition.latitude-position.latitude) * Math.PI/180;
    const diffLambda = (lastPosition.latitude-position.latitude) * Math.PI/180;

    const a = Math.pow(Math.sin(diffPhi/2), 2) + Math.cos(lastPhi) * Math.cos(phi) * Math.pow(Math.sin(diffLambda/2), 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}