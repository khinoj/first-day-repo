var container = document.querySelector(".container");

container.addEventListener("click", function (event) {
  var element = event.target;

  var state = element.getAttribute("data-state");
  // TODO: Complete function
  console.log(element);

  element.setAttribute("data-state", "visible");
  var number = element.getAttribute("data-number");
  element.textContent = number;
  if (state === "visible") {
    element.setAttribute("data-state", "hidden");
    element.textContent = "";
  }
});
