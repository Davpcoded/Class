console.log("process.argv");

var helloEl = "hellooo, node";

console.log(helloEl);

var value1 = process.argv[2];
var value2 = process.argv[3];
if (value1 === value2) {
  console.log(true);
} else {
  console.log(false);
}
