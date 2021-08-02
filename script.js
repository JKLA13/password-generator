// global variables with arrays of characters to use

var lowerCaseArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCaseArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var numericArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharArr = [
  "?",
  "@",
  "%",
  "+",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// function to grab user input from prompts

function userPrompts() {
  // prompt to get length of password
  var pwLength = parseInt(prompt("How long do you want your password to be?"));

  //if statement to validate pw length

  if (pwLength < 8 || pwLength > 128) {
    alert("Your password needs to be in between 8 and 128 characters.");
    return null;
  }

  //confirm methods - confirm if user wants specific characters
  var confirmLower = confirm(
    "Do you want lower case characters in your password?"
  );
  var confirmUpper = confirm(
    "Do you want upper case characters in your password?"
  );
  var confirmNumeric = confirm(
    "Do you want numeric case characters in your password?"
  );
  var confirmSpecChar = confirm(
    "Do you want special characters case characters in your password?"
  );

  // if statement to validate that user chooses one

  if (
    confirmLower === false &&
    confirmUpper === false &&
    confirmNumeric === false &&
    confirmSpecChar === false
  ) {
    alert("You must select at least one character.");
    return null;
  }

  //object to store user input -
  var pwInput = {
    promptLength: pwLength,
  };

  if (confirmLower === true) {
    pwInput["lowerCase"] = confirmLower;
  }

  if (confirmUpper === true) {
    pwInput["upperCase"] = confirmUpper;
  }

  if (confirmNumeric === true) {
    pwInput["numeric"] = confirmNumeric;
  }

  if (confirmSpecChar === true) {
    pwInput["specChar"] = confirmSpecChar;
  }

  return pwInput;
}

// make a function to generate pw

function generatePassword() {
  var promptInput = userPrompts();

  // create conditionals
  let password = [];

  for (var i = 0; i < promptInput.promptLength; i++) {
    var arrayIndex = Math.floor(
      Math.random() * (Object.keys(promptInput).length - 1) + 1
    );

    var selectedArray = Object.keys(promptInput)[arrayIndex];

    if (selectedArray == "lowerCase") {
      password.push(
        lowerCaseArr[Math.floor(Math.random() * lowerCaseArr.length)]
      );
    }

    if (selectedArray == "upperCase") {
      password.push(
        upperCaseArr[Math.floor(Math.random() * upperCaseArr.length)]
      );
    }

    if (selectedArray == "numeric") {
      password.push(numericArr[Math.floor(Math.random() * numericArr.length)]);
    }

    if (selectedArray == "specChar") {
      password.push(
        specialCharArr[Math.floor(Math.random() * specialCharArr.length)]
      );
    }
  }

  return password.join("");
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
