// Access element using id
var articlesDiv = document.getElementById("articles");
var headerDiv = document.getElementById("header");

// Change style by accessing style object's properties
articlesDiv.children[2].style.fontSize = "50px"; // changed 2 to 0
headerDiv.style.color = "white"; // add .children[0] after headerdiv
