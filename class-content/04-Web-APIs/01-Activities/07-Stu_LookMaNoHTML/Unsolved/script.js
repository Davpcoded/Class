// Create your HTML Page via DOM Methods here!

var header1 = document.createElement("h1");
var myOtherDiv = document.createElement("div");

header1.innerHTML = "Here is some awesome text";
myOtherDiv.innerHTML = "<a href=''>John's link</a>";

document.body.appendChild(header1);
document.body.appendChild(myOtherDiv);