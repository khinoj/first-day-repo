var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`


function createList () {
    event.preventDefault();
    var shoppingItem = $('input[name="shopping-input"]').val();
    // $('input[name="first-name"]');
    shoppingListEl.append("<li>" + shoppingItem + "</li>");
   
}


// shoppingInput.val("");





// TODO: Add an event listener to the `shoppingFormEl` to handle submission
// .btn btn-info
shoppingFormEl.on('submit', createList);
// shopping-form
