// Assignment Code
// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var generateBtn = document.querySelector("#generate");

//store possibilities
var possibility = [];
var password ='';

function generatePassword() {
  var length = parseInt(prompt("How long password?"));

  //check for NaN
  if (isNaN(length) === true) {
    alert("Password length is not a number");
    return;
  }

  //check if too short
  if (length < 8) {
    alert("Password is too short");
    return;
  }

  //check if too long
  if (length > 128) {
    alert("Password is too long");
    return;
  }

  var special = confirm("do you want special characters?");
  var number = confirm("do you want number characters?");
  var upper = confirm("do you want upper characters?");
  var lower = confirm("do you want lower characters?");

  if (special) {
    possibility = possibility.concat(specialCharacters);
  }

  if (number) {
    possibility = possibility.concat(numericCharacters);
  }

  if (upper) {
    possibility = possibility.concat(upperCasedCharacters);
  }

  if (lower) {
    possibility = possibility.concat(lowerCasedCharacters);
  }

  console.log("*******possibility: ",possibility);

  for (var i = 0; i < length; i++) {
    //random number pick possibility range
    var rand = Math.floor(Math.random() * possibility.length)
    //random character pick
    var randPoss = possibility[rand];
    //add to password
    password += randPoss
  }

  console.log("*******password: ",password);

  document.querySelector("#password").value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
