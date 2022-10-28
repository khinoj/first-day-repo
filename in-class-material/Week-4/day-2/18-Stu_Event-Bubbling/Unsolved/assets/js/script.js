// TODO: Which element is the following line of code selecting?
var carousel = document.querySelector(".carouselbox");
// carouselbox

// TODO: Which element is the following line of code selecting?
//next and previou button
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203",
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) {
    index = images.length - 1;
  } else if (index > images.length - 1) {
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
// listen to click on image and pops out image with new url
carousel.addEventListener("click", function () {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
// click on next button

next.addEventListener("click", function (event) {
  // TODO: What is the purpose of the following line of code?
  // prevents propagation stop image from popping  into new screen
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
//listen for previous button click

prev.addEventListener("click", function (event) {
  // TODO: What would happen if we didn't add the following line of code?
  // hitting the button would cause image to force user to new url with image
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
