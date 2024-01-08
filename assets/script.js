// Assignment Code
var generateBtn = document.querySelector("#generate");


var length = 0;
var includeLowercase = false;
var includeUppercase = false;
var includeNumeric = false;
var includeSpecial = false;

while (length === null || length < 8 || length > 128) {
    length = window.prompt("How many characters would you like your password to be?");
    if (length === null) {
        window.alert("You clicked Cancel. Please enter a number.");
    } else if (length < 8 || length > 128) {
        window.alert("Please choose a number between 8 and 128.");
    }
}

includeLowercase = window.confirm("Would you like to include lowercase letters?");
includeUppercase = window.confirm("Would you like to include uppercase letters?");
includeNumeric = window.confirm("Would you like to include numbers?");
includeSpecialChar = window.confirm("Would you like to include special characters?");

function generatePassword() {

    var lowercase = includeLowercase ? "abcdefghijklmnopqrstuvwxyz" : "";
    var uppercase = includeUppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    var numeric = includeNumeric ? "0123456789" : "";
    var special = includeSpecialChar ? "!@#$%^&*()_+~`|}{[]\\:;?><,./-=" : "";
    var password = "";
    var characters = "";

    characters += lowercase;
    characters += uppercase;
    characters += numeric;
    characters += special;

    for (var i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
}


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
