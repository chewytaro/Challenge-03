// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write a function for generate password 
function generatePassword() {
  
  var characterLength = prompt("How many characters do you want for your password? (8-128)");
  while (characterLength < 8 || characterLength > 128) {
    confirm ('Please input a number between 8 and 128');
    break; 
  } if (characterLength > 8 || characterLength < 128) {
    confirm ('Here are a couple more options for your password');
  }

  var uppercase = confirm("Would you like to include uppercase characters?");
  var lowercase = confirm("Would you like to icnlude lowercase characters?");
  var numbers = confirm("Would you like to include numbers?");
  var specialCharacters = confirm("Would you like to include special characters?"); 

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


