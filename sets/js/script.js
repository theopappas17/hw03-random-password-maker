//Password components to generate password
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const special = "!@#$%^&*+-";
//Global variables
//base is the variable that retains the pool of characters that the password is to have. It is initially an empty string.
let base = '';
//numChar is the character length of the password and is initialized without a value.
let numChar;
//key is the password generated and initialized as an empty string.
let key = '';

// Beginning of questioning about password constituents. There is a function for each constituent. This function prompts for the length of the password and then calls the next function.
function passwordLength() {
  numChar = parseInt(prompt('How many characters do you want your password to contain? Choose a number between 8 and 128.'));
  //This if statement alerts users if they haven't provided the necessary starting input.
  if (numChar < 8 || numChar > 128 || Number.isNaN(numChar)) {
    alert('Please enter a number between 8 and 128!');
  } else {
  promptNumbers();
  }
}

//This function asks if the password is to have numerals. If numerals are wanted then numbers string is added to variable base. The next function is then called.
function promptNumbers() {
  let numerals = confirm('Do you want to include numbers?')
  if (numerals == true) {
    base = numbers;
    promptLowercase();
  } else {
    promptLowercase()
  }
}

//This function asks if the password is to have lowercase letters. If lowercase letters are wanted then lowerCase string is added to base. The next function is then called.
function promptLowercase() {
  let lowerCase = confirm('Do you want to include lowercase letters?')
  if (lowerCase == true) {
    base += lower;
    promptUppercase();
  } else {
    promptUppercase();
  }
}

//This functions asks if the password is to have uppercase letters. If uppercase letters are wanted then upperCase string is added to base. The next function is then called.
function promptUppercase() {
  let upperCase = confirm('Do you want to include uppercase letters?')
  if (upperCase == true) {
    base+= upper;
    promptSpecial();
  } else {
    promptSpecial();
  }
}

//This functions asks if the password is to have special characters. If special characters are wanted then specChar string is added to base. The next function is then called.
function promptSpecial() {
  let specChar = confirm('Do you want to include special characters?')
  if (specChar == true && base != '') {
    base+= special;
  }
  //This portion of the if statement determines if the user has not selected any characters to make up the password and alerts the user that at least one character type is necessary.
    else if (specChar == false && base != '') {
      base+= '';
    } else {
    alert('The password must contain one character type');
  }
}

//This function creates the password from the resulting characters in base variable and randomly picks a character in the base variable to add to variable key for the number of characters specified in numChar.
function generatePassword() {
  //This assignment of an empty string to key allows the password function to generate a second password, but clears the previous password from previous attempts.
  key = '';
  for (i = 0; i < numChar; i++){
    key+= base.charAt(Math.floor(Math.random()*base.length))
  }
  //generatePassword returns key when finished.
  return key;
}

// Write password to the #password input. Ths is the first function to be called it calls the passwordLength function, which then starts the questioning prompts. After passwordLength series finishes, function generatePassword is called to generate the password and it is then displayed in the password display of the html.
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordLength();
  var password = generatePassword();
  passwordText.value = password;
}

//Add event listener to generate button
var generateBtn = document.querySelector("#generate");
//This calls writePassword when the click event is heard on the generate button.
generateBtn.addEventListener("click", writePassword);