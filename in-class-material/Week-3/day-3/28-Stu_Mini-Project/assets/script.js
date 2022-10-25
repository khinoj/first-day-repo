// var userChoice = {
//   Rock: "R",
//   Paper: "P",
//   Scissors: "S",
// };

var computerChoice = ["R", "P", "S"];

// if (userChoice) alert();
// alert(message);
// window.alert("Hello world!");
// alert("Hello world!");

// confirm(message);
// if (window.confirm("Do you really want to leave?")) {
//   window.open("exit.html", "Thanks for Visiting!");
// }

var userinput = prompt("Pick R, P or S");

//
console.log(Math.floor(Math.random() * (3 - 0) + 0));
// math.random()

function getRandomNumber() {
  return Math.floor(Math.random() * (3 - 0) + 0);
}

console.log(getRandomNumber());

var computerinput = computerChoice[getRandomNumber()];
console.log(computerinput);

if (computerinput);
