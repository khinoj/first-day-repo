var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW

constellations.splice(0,0, 'Canis Major');
console.log(constellations);

planets.pop();
console.log(planets);

var galaxy = constellations.concat(planets);
    console.log(galaxy);


planets.splice(5,0, 'Hoth');
var stars = planets.concat(constellations)
    console.log(stars);

var starcaps = star.toUpperCase('polaris');
    console.log(starcaps);
    