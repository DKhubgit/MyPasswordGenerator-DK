// Assignment code here

var askAgain;

function generatePassword() {
  var password = "Password not generated"
  var numLength;
  var specialChar;
  var criteria = prompt(
    "Please type the following Number to include in your password:\n1. Length of the password\n2. Character types");
    if (criteria == 1) {
      numChar = wordLength();
    } else if (criteria == 2) {
      specialChar = wordTypes();
    } else {
      return password;
    }

    askAgain = confirm("Would you like to add another criteria?");
    if (askAgain) {
      generatePassword();
    } else {
      return password;
    }
}

//prompt for choosing the length of the password, returns a number.
function wordLength() {
   var userLength = prompt("Please choose a length of at least 8 characters and no more than 128 characters");
   if (userLength == null) {
      userLength = 0;
      return userLength;
   } else if (userLength == "") {
      alert("Please choose a number from 8 to 128");
      wordLength();
   } else if (userLength < 7 || userLength > 126) {;
      alert("Please choose a number from 8 to 128");
      wordLength();
   } else {
     return userLength;
   }
}

//prompt for choosing whether or not to include special character types. Returns an array.
function wordTypes() {
  var typesList = [
    confirm("Would you like to include 'LOWERCASE' letters?\n 'YES' press 'OK || 'NO' press 'cancel'"),
    confirm("Would you like to include 'UPPERCASE' letters\n 'YES' press 'OK || 'NO' press 'cancel'"),
    confirm("Would you like to include 'NUMERIC' values\n 'YES' press 'OK || 'NO' press 'cancel'"),
    confirm("Would you like to include 'SPECIAL CHARACTERS'?\n 'YES' press 'OK || 'NO' press 'cancel'")
  ]
  var userTypes;
  var userTypesList = [0, 0, 0, 0];
  for (var i = 0; i < typesList.length; ++i) {
    userTypes = typesList[i];
    if (userTypes) {
      userTypesList[i] = 1;
    }
  }
  return userTypesList;
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
