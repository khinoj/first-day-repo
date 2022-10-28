var key = document.querySelector("#key");
var code = document.querySelector("#code");
// var status = document.querySelector("#status")

function keydownAction(event) {
  // TODO: Complete keydown function
  key.textContent = event.key;
  code.textContent = event.code;
  document.querySelector("#status").innerHTML = "KEYDOWN Event";
}

function keyupAction() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction);
