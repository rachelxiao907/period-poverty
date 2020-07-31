/************************************************/
/********* ADD CHECKLIST FUNCTIONALITY **********/
/************************************************/

/* TODO: Add a variable to store the "my-list" element */
var fullItemList = document.getElementById("my-list");

/* TODO: Create the event listener that listens for a mouse click and runs the checkOffList function */
// element.addEventListener(event, function);
if (fullItemList) {
  fullItemList.addEventListener("click", checkOffItem, false);
}

/* TODO: Declare the function checkOffList and add actions inside the { } */
function checkOffItem(clicked) {
  // The target property returns the element that triggered the event. When we say return here, we mean that the browser automatically gives us this information back so we can use/change it. Here it will tell us which element we clicked on.
  // The tagName property returns the tag name of an element. Note that the returned value is in uppercase, so instead of li we want to use LI.
  if (clicked.target.tagName == "LI") {  // find out which element triggered a specified event 
    // classlist is a DOM property returns the class name of an element. This property just gives us the name of the class - it doesn't take any action. For that, we need to attach a method to it. 
    // toggle is a method of this property that allows you to toggle or switch back and forth between classes.
    clicked.target.classList.toggle("all-done"); // switch between action-li and all-done
  }
}