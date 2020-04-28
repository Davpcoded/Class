var sum = function (a, b) {
  return a + b;
};
var difference = function (a, b) {
  return a - b;
};
var product = function (a, b) {
  return a * b;
};
var quotient = function (a, b) {
  return a / b;
};
var predictable = function () {
  return 1;
};

// module.exports is an object we use to store variables or methods
module.exports = {
  sum: sum,
  difference: difference,
  product: product,
  quotient: quotient,
};
