var outer = document.querySelector(".outer-div");
var inner = document.querySelector(".inner-div");
var button = document.querySelector(".button");

/**
 * NOTE
 *
 * event.currentTarget refers to the element to which the event handler has been attached
 * event.target refers to the element on which the event occurred
 */

function changeBlue(event) {
  // event.stopPropagation();
  event.currentTarget.setAttribute("style", "background-color: blue");
}

function changePurple(event) {
  // event.stopPropagation();
  event.currentTarget.setAttribute("style", "background-color: purple");
}

function changeOrange(event) {
  // event.stopPropagation();
  event.currentTarget.setAttribute("style", "background-color: orange");
}

outer.addEventListener("click", changeOrange);
inner.addEventListener("click", changePurple);
button.addEventListener("click", changeBlue);
