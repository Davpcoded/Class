var listEl = document.querySelector("#grocery-list");
var shoppingCartEl = document.querySelector("#shopping-cart");
var groceries = ["Bananas", "Apples", "Oranges", "Grapes", "Blueberries"];

/**
 * Remember:
 *
 * event.currentTarget refers to the element to which the event handler has been attached
 * event.target refers to the element on which the event occurred
 */
listEl.addEventListener("click", function(event) {
  event.preventDefault();
  if (event.target.matches("button")) {
    var item = document.createElement("div");
    item.textContent = groceries[event.target.parentElement.id];
    shoppingCartEl.append(item);
  }
});
