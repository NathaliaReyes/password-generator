// Assignment Code
// Select the button with the id generate
var generateBtn = document.querySelector("#generate");

// Declare variables that will be used in the function generatePassword
var lenPassword = false;
var chaTypes = false;
var uppercase = false;
var lowercase = false;
var numeric = false;

// Initialize the variable password and characteres as empty strings
var password = "";
var characteres = "";

// Function to generate the password
function generatePassword() {
  // Ask the user how many characteres he wants his password to have
  while(lenPassword === null || lenPassword < 8 || lenPassword > 128) {
    lenPassword = prompt("How many characteres do you want your password to have between 8 - 128 ?");
      if(lenPassword === null) {
        alert("You clicked Cancel. Enter a number!")
      } else if (lenPassword < 8 || lenPassword > 128 || (lenPassword.match(/[A-z]/))) {
        alert("Please enter a number between 8 - 128")
      }
  }

  // Ask the user what type of characteres he wants his password to have
  chaTypes = confirm("Do you want your password includes special characteres?");
  uppercase = confirm("Do you want your password includes UPPERCASE?");
  lowercase = confirm("Do you want your password includes lowercase?");
  numeric = confirm("Do you want your password includes numbers?");

  // According to the user's choices, create a string with the characteres that will be used to generate the password
  var includesCharacteres = chaTypes ? "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~" : "";
  var includesUppercase = uppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
  var includesLowercase = lowercase ? "abcdefghijklmnopqrstuvwxyz" : "";
  var includesNumbers = numeric ? "0123456789" : "";

  // Log the user's choices (This is for debugging purposes)
  console.log(includesCharacteres);
  console.log(includesUppercase);
  console.log(includesLowercase);
  console.log(includesNumbers);

  // If the user chooses at least one type of characteres, create a string with all the characteres that will be used to generate the password
  if (chaTypes === true || uppercase === true || lowercase === true || numeric === true) {
    characteres =  includesCharacteres + includesUppercase + includesLowercase + includesNumbers; 
    // Log the characteres
    console.log(characteres);

    // Generate the password using the algorithm Math.random()
    for (i = 0; i < lenPassword; i++) {
      password += characteres.charAt(Math.floor(Math.random() * characteres.length));
      console.log((Math.floor(Math.random() * characteres.length)));
      console.log(lenPassword);
      console.log(password);
      console.log(characteres.length);
    }

    return password;
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
