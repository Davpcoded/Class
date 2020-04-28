var countEl = document.querySelector("#count");
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var count = 0;

function setCounterText(){
    countEl.textContent = count;
}

incrementEl.addEventListener("click", function(){
    count++;
    setCounterText();

});

incrementEl.addEventListener("click", function(){
    if
    count++;
    setCounterText();