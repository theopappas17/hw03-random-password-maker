// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays to generate password
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const special = "!@#$%^&*+-";
let base = '';
let numChar;
let key = '';

function passwordLength() {
  numChar = parseInt(prompt('How many characters do you want your password to contain? Choose a number between 8 and 128.'));
  if (numChar < 8 || numChar > 128 || numChar == '') {
    alert('Please enter a number between 8 and 128!');
  } else {
  promptNumbers();
  }
}

function promptNumbers() {
  let numerals = confirm('Do you want to include numbers?')
  if (numerals == true) {
    base = numbers;
    promptLowercase();
  } else {
    promptLowercase()
  }
}

function promptLowercase() {
  let lowerCase = confirm('Do you want to include lowercase letters?')
  if (lowerCase == true) {
    base += lower;
    promptUppercase();
  } else {
    promptUppercase();
  }
}

function promptUppercase() {
  let upperCase = confirm('Do you want to include uppercase letters?')
  if (upperCase == true) {
    base+= upper;
    promptSpecial();
  } else {
    promptSpecial();
  }
}

function promptSpecial() {
  let specChar = confirm('Do you want to include special characters?')
  if (specChar == true && base != '') {
    base+= special;
  }
    else if (specChar == false && base != '') {
      base+= '';
    } else {
    alert('The password must contain some character');
  }
}

function generatePassword() {
  for (i = 0; i < numChar; i++){
    console.log(numChar);
    key+= base.charAt(Math.floor(Math.random()*base.length))
  }
  return key;
}

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = '';
  passwordLength();
  var password = generatePassword();
  passwordText.value = password;
}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);