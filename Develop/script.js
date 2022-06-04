// Assignment code here

function generatePassword() {
  var password = "Password not generated"
  var numLength;
  var specialChar;
  var criteria = prompt(
    "Please type the following Number to include in your password:\n1. Length of the password\n2. Character types");
    if (criteria == 1) {
        numChar = wordLength();
        if (numChar === 0) {
          generatePassword();
        }
    }
  return password;
}

function wordLength() {
   var numLength = prompt("Please choose a length of at least 8 characters and no more than 128 characters");
   if (numLength == null) {
      var answer = confirm("Would you like to start from the beginning?");
        if (answer) {
          generatePassword();
        } else {
          return;
        }
   } else if (numLength == "") {
      alert("Please choose a number from 8 to 128");
      wordLength();
   } else if (numLength < 8 || numLength > 128) {;
      alert("Please choose a number from 8 to 128");
      wordLength();
  } else {
      return numLength;
  }
  return numLength;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
