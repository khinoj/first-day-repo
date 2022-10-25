//WRITE YOUR CODE BELOW
var customerOrder = {
  drinkName: "Coffee",
  numSugar: 2,
  isReady: false,
};

if (customerOrder.isReady) {
  console.log("Ready for pick-up");
} else {
  console.log("Still in order queue");
}

customerOrder.isReady = true;

if (customerOrder.isReady) {
  console.log("Ready for Pick-up");
} else {
  console.log("Still in the queue");
}

console.log(customerOrder.drinkName);
console.log(customerOrder.numSugar);
