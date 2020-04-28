var math = require("./math.js");

var operation = process.argv[2];
var a = parseInt(process.argv[3]);
var b = parseInt(process.argv[4]);
var result = null;

switch (operation) {
  case "sum":
    result = math.sum(a, b);
    break;
  case "difference":
    result = math.difference(a, b);
    break;
  case "product":
    result = math.product(a, b);
    break;
  case "quotient":
    result = math.quotient(a, b);
    break;
}
console.log(result);
