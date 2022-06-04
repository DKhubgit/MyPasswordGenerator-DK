// Assignment code here

var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numericLetters = "1234567890";
var specialLetters = "!@#$%^&*()"

lowerLetters = lowerLetters.split('');
upperLetters = upperLetters.split('');
numericLetters = numericLetters.split('');
specialLetters = specialLetters.split('');

var characters = [lowerLetters, upperLetters, numericLetters, specialLetters];

var numChar = 0;
var specialChar = 0;

//initial prompt
function generatePassword() {
  var password = "Password not generated"
  var criteria = prompt(
    "Please type the following Number to include in your password:\n1. Length of the password\n2. Character types");
    if (criteria == 1) {
      numChar = promptLength();
    } else if (criteria == 2) {
      specialChar = promptTypes();
    } else {
      return password;
    }

    console.log(numChar);
    console.log(specialChar);
    console.log("end");

    //Creating the password after getting user inputs
    //user might not input either prompts so we ask if they want a different criteria
    var askAgain = confirm("Would you like to add a different criteria?");
    if (askAgain) {
      generatePassword();
    } else if (numChar === 0 || specialChar === 0) {
      return password;
    } else {
      console.log("creating password: ")
      password = createPassword(numChar, specialChar);
      console.log(password);
      return password;
    }
}

//prompt for choosing the length of the password, returns a number.
function promptLength() {
   var userLength = prompt("Please choose a length of at least 8 characters and no more than 128 characters");
   if (userLength == null) {
      userLength = 0;
      return userLength;
   } else if (userLength == "") {
      alert("Please choose a number from 8 to 128");
      promptLength();
   } else if (userLength < 7 || userLength > 126) {;
      alert("Please choose a number from 8 to 128");
      promptLength();
   } else {
     return userLength;
   }
}

//prompt for choosing whether or not to include special character types. Returns an array.
function promptTypes() {
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

//using randomization lets create password using data passed in.
function createPassword(newLength, newTypes) {
  var userLetters = [];
  var newPassword = "";

  //Go through array newTypes and group together each type of characters the user wanted to include.
  //The newTypes array is a list of elements with either 0 or 1, 1 referring to yes and 0 to no.
  //UserLetters then lists all the characters that user wants.
  for (var i = 0; i < newTypes.length; i++) {
    if (newTypes[i] === 1) {
      userLetters = userLetters.concat(characters[i]);
    }
  }

  var y = userLetters.length;
  
  //Now go through user's desired length of password and randomly choose a character from userLetters.
  for (var i = 0; i < newLength; ++i) {
    newPassword = newPassword + userLetters[getRandNum(y)];
  }
  return newPassword;
}

//function for random number, passing in the length of the UserLetters array.
function getRandNum(x) {
  var num = Math.floor(Math.random() * x);
  return num;
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
