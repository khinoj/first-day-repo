var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
constellations.splice(5,0, "Canis Major");
console.log(constellations)

planets.pop();
console.log(planets);


var galaxy = constellations.concat(planets);
console.log(galaxy);


var water = ["Clear", "Dirty", "Fountain"];
water[0] = "Best Water"

console.log(water)