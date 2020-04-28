var tipEl = document.querySelector("#tip-percentage");
var totalEl = document.querySelector("#total");
var submitEl = document.querySelector("#submit");

function caculateTip(total, tipPercentage) {

}

function calculateTotal


function addTip() {
    event.preventDefault();
    var tipPercentage = tipEl.value * 0.01;
    var total = totalEl.value;
    var tipAmount = caculateTip(total, tipPercentage);
    var newTotal = calculateTotal(tipAmount, total);
    document.querySelector("#tip-amount").textContent = tipAmount;
    document.querySelector("#new-total").textContent = newTotal.toFixed(2);
}
submit