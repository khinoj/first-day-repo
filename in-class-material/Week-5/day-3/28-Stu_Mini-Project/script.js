setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("time").innerHTML = date.toLocaleTimeString();
}