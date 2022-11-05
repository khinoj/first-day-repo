//WRITE YOUR CODE BELOW
var customerOrder = {
    drinkName: "Coffee",
    numSugar: 3,
    isReady: true
};


console.log(customerOrder.drinkName);
console.log(customerOrder.numSugar);

if (customerOrder.isReady) {
    console.log("Ready for pick-up " + customerOrder.drinkName + " with " + customerOrder.numSugar + " sugar ");
} else {
    console.log("Still in order queue");
};

var starWars = {
    jedi: "Luke Skywalker",
    sith: "Darth Vader",
    jediMaster: "Yoda",
    sithMaster: "Palpatine",
    father: false,
    red: true,
    green: false
}

if (starWars.father) {
    console.log("My Father " + starWars.sith + " was a jedi like me ")
} else if (starWars.red === true) {
    console.log(starWars.sith + " is " + starWars.sithMaster + " apprentice")
} else if (starWars.green === true) {
    console.log(starWars.jediMaster + " had amazing quotes and " + starWars.jedi + " was his apprentice")
};