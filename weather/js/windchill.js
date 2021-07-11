
let computeWindchill = function(t, s) {
    /**
     * Check windchill compute condition
     */
    if(t >= 50 || s < 3) {
        return 'N/A';
    }
    let f = 35.74 + (0.6215 * t) - (35.75 * (Math.pow(s, 0.16))) + (0.4275 * t * Math.pow(s, 0.16));
    return Math.round(f) + '&deg; F';
}

let temperature = 38;
let wind_speed = 5;

let wind_chill = computeWindchill(temperature, wind_speed);

document.getElementById('currently').innerHTML = temperature + '&deg; F';
document.getElementById('speed').innerHTML = wind_speed + '&deg; F';
document.getElementById('chill').innerHTML = wind_chill;