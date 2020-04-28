// Write a function that takes user input and creates a password
// based on that input and returns it
function generatePassword(passwordLenght) {
  if (passwordLenght < 8 || passwordLenght > 128) {
    alert("password must be min 8 characters and max 128 characters");
  }
}

//////////////////////////////////////////////////////////////
// DO NOT TOUCH THE CODE BELOW
//////////////////////////////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
