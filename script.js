/*
1. If you click on the list item, it toggles the .done class on and off.
2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.
3. BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)
*/
// Select element
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// Function to get input length
function inputLength() {
	return input.value.length;
}
// Function to create a new list item
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	// Add toggle functionality to new items
	li.addEventListener("click", toggleAfterClick); 
	// Create delete button for the new item
	var deButton = document.createElement("button");
	deButton.textContent = "Delete";
	deButton.addEventListener("click", function() {
		ul.removeChild(li);
	});
	// Append the delete button to the list item
	li.appendChild(deButton);
	// Add inline styles for spacing
	deButton.style.marginLeft = "10px";
	// Append the new list item to the unordered list
	ul.appendChild(li);
	// Clear the input field
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// Function to toggle the .done class
function toggleDone(event) {
	event.target.classList.toggle("done");
}

function toggleAfterClick(event) {
	event.target.classList.toggle("done");
}

/****************
 * important !!!!
 ****************/

// Select all existing list items
var listItems = document.querySelectorAll("li");
// Add toggle and delete functionality to existing list items
listItems.forEach(function (listItem) {
	//Add functionality to toggle the "done" class when the list item is clicked
	listItem.addEventListener("click", toggleAfterClick);
	// Create a Delete button
	var delButton = document.createElement("button");
	delButton.textContent = "Delete";

	// Add inline styles for spacing
	delButton.style.marginLeft = "10px";

	delButton.addEventListener("click", function() {
		ul.removeChild(listItem);
	});

	//Append the delete button to the list item
	listItem.appendChild(delButton);
}) 

// Event listeners for input and button
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
