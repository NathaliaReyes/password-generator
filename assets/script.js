// Assignment Code
var generateBtn = document.querySelector("#generate");

var lenPassword = false;
var chaTypes = false;
var uppercase = false;
var lowercase = false;
var numeric = false;

var password = "";
var characteres = "";

function generatePassword() {
  
  while(lenPassword === null || lenPassword < 8 || lenPassword > 128) {
    lenPassword = prompt("How many characteres do you want your password to have between 8 - 128 ?");
      if(lenPassword === null) {
        alert("You clicked Cancel. Enter a number!")
      } else if (lenPassword < 8 || lenPassword > 128 || (lenPassword.match(/[A-z]/))) {
        alert("Please enter a number between 8 - 128")
      }
  }

  chaTypes = confirm("Do you want your password includes special characteres?");
  uppercase = confirm("Do you want your password includes UPPERCASE?");
  lowercase = confirm("Do you want your password includes lowercase?");
  numeric = confirm("Do you want your password includes numbers?");

  var includesCharacteres = chaTypes ? "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~" : "";
  var includesUppercase = uppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
  var includesLowercase = lowercase ? "abcdefghijklmnopqrstuvwxyz" : "";
  var includesNumbers = numeric ? "0123456789" : "";

  console.log(includesCharacteres);
  console.log(includesUppercase);
  console.log(includesLowercase);
  console.log(includesNumbers);

  if (chaTypes === true || uppercase === true || lowercase === true || numeric === true) {
    characteres =  includesCharacteres + includesUppercase + includesLowercase + includesNumbers; 
    // Log the characteres
    console.log(characteres);


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
