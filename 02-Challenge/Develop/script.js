// Assignment Code
var generateBtn = document.querySelector("#generate");


//Variable assingments needed 

var characterLength;
var uppercasePicked;
var lowercasePicked;
var numbersPicked;
var specialPicked; 
var usersPicked;


var uppercaseCharacters = ["A", "B", "C", "D", "F", "G", "H", "I", "J", "K", "L", "M",
"N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
"m", "n", "o", "p", "q", "r", "s", "t", "u", 'v', 'w', 'x', 'y', 'z'];

var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialCharacters = ['`', '~!', '@', '#', '$', '%', '%', '^', '&', '*', '(', ')',
'_', '-', '=', '+', '[', '{', ']', '}', '|', '\\', ';', ':', '"', ',',
'<', '.', '>', '/', '?'];




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Function that users would have to answer in order to generate a password
function generatePassword() {
  characterLength = prompt("How many characters do you want for your password? (8-128)");
    if (!characterLength) {
      characterLength = alert ('Please input a number between 8 and 128');
    } else if (characterLength < 8 || characterLength > 128) {
      characterLength = alert ('Please input a number between 8 and 128');
    } else {
       uppercasePicked = confirm("Would you like to include uppercase characters?");
       lowercasePicked = confirm("Would you like to icnlude lowercase characters?");
       numbersPicked = confirm("Would you like to include numbers?");
       specialPicked = confirm("Would you like to include special characters?");    
    };

  

//if users pick nothing or if they pick all four
  if (!uppercasePicked && !lowercasePicked && !numbersPicked && !specialPicked) {
    usersPicked = alert ('Please select at least one option');
  } else if (uppercasePicked && lowercasePicked && numbersPicked && specialPicked) {
    usersPicked = uppercaseCharacters.concat(lowercaseCharacters, numberCharacters, specialCharacters);
  } 

//if they only choose three options
  else if (uppercasePicked && lowercasePicked && numbersPicked && !specialPicked) {
    usersPicked = uppercaseCharacters.concat(lowercaseCharacters, numberCharacters);
  } else if (uppercasePicked && lowercasePicked && !numbersPicked && specialPicked) {
    usersPicked = uppercaseCharacters.concat(lowercaseCharacters, specialCharacters); 
  } else if (uppercasePicked && !lowercasePicked && numbersPicked && specialPicked) {
    usersPicked = uppercaseCharacters.concat (numberCharacters, specialCharacters);
  } else if (!uppercasePicked && lowercasePicked && numbersPicked && specialPicked) {
    usersPicked = lowercaseCharacters.concat(numberCharacters, specialCharacters);
  }

//if they only choose two options
  else if (uppercasePicked && lowercasePicked && !numbersPicked && !specialPicked) {
    usersPicked = uppercaseCharacters.concat (lowercaseCharacters);
  } else if (uppercasePicked && !lowercasePicked && !numbersPicked && specialPicked) {
    usersPicked = uppercaseCharacters.concat(specialCharacters);
  } else if (uppercasePicked && !lowercasePicked && numbersPicked && !specialPicked) {
    usersPicked = uppercaseCharacters.concat(numberCharacters);
  } else if (!uppercasePicked && lowercasePicked && numbersPicked && !specialPicked) {
    usersPicked = lowercaseCharacters.concat(numbersPicked);
  } else if (!uppercasePicked && lowercasePicked && !numbersPicked && specialPicked) {
    usersPicked = lowercaseCharacters.concat(specialCharacters);
  } else if (!uppercasePicked && !lowercasePicked && numbersPicked && specialPicked) {
    usersPicked = numberCharacters.concat(specialCharacters);
  }

//if they only choose one option
  else if (uppercasePicked && !lowercasePicked && !numbersPicked && !specialPicked) {
    usersPicked = uppercaseCharacters;
  } else if (!uppercasePicked && lowercasePicked && !numbersPicked && !specialPicked) {
    usersPicked = lowercaseCharacters;
  } else if (!uppercasePicked && !lowercasePicked && numbersPicked && !specialPicked) {
    usersPicked = numberCharacters;
  } else if (!uppercasePicked && !lowercasePicked && !numbersPicked && specialPicked) {
    usersPicked = specialCharacters;
  };


  var passwordBlank = [];

//this makes it so that the length the users input is the length the password will be 
  for (var i = 0; i < characterLength; i++) {
    var allChoices = usersPicked[Math.floor(Math.random() * usersPicked.length)];
    passwordBlank.push(allChoices);
  }


  var password = passwordBlank.join("");
  return password;
}
