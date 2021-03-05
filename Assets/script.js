// Assignment Code
var generateBtn = document.querySelector("#generate");
var minLength;
var maxLength;
var upperChar;
var specChar;
var numChar;
var req1;
var req2;
var passReqs;
var passLength;
var passLengthText;
var characters;
// Write password to the #password input

function passwordReqs() {
  req1 = confirm("Would you like to include length requirements?");
  req2 = confirm("Would you like to specify character types to include in the random generation?");
  if((req1 ===true) && (req2 === true)) {
    minLength = prompt("Minimum password length (8 is recommended):", "8");
    alert(`You selected ${minLength} as your minumum password length`);
    maxLength = prompt("Maximum password length (128 is recommended): ", "128");
    alert(`You selected ${maxLength} as your maximum password length`);
    upperChar = prompt("Would you like to include uppercase characters? Type Yes or No: ", "Yes");
      if (upperChar === "Yes") {
        alert('You selected to include uppercase character specifications.');
        upperChar = true;
      }
      else {
        alert('You selected to not include uppercase character specifications');
        upperChar = false;
      }
    specChar = prompt("Would you like to include special characters (e.g. !, ~, *, etc.)? Type Yes or No: ", "Yes");
      if (specChar === "Yes") {
        alert('You selected to include special character specifications.');
        specChar = true;
      }
      else {
        alert('You selected to not include special character specifications');
        specChar = false;
      }
      numChar = prompt("Would you like to include numeric characters? Type Yes or No: ", "Yes");
      if (numChar === "Yes") {
        alert('You selected to include numeric character specifications.');
        numChar = true;
      }
      else {
        alert('You selected to not include numeric character specifications');
        numChar = false;
      }
  }
  else if ((req1 !== true) && (req2 === true)) {
    upperChar = prompt("Would you like to include uppercase characters? Type Yes or No: ", "Yes");
      if (upperChar === "Yes") {
        alert('You selected to include uppercase character specifications.');
        upperChar = true;
      }
      else {
        alert('You selected to not include uppercase character specifications');
        upperchar = false;
      }
    specChar = prompt("Would you like to include special characters (e.g. !, ~, *, etc.)? Type Yes or No: ", "Yes");
      if (specChar === "Yes") {
        alert('You selected to include special character specifications.');
        specChar = true;
      }
      else {
        alert('You selected to not include special character specifications');
        specChar = false;
      }  
    numChar = prompt("Would you like to include numeric characters? Type Yes or No: ", "Yes");
      if (numChar === "Yes") {
        alert('You selected to include numeric character specifications.');
        numChar = true;
      }
      else {
        alert('You selected to not include numeric character specifications');
        numChar = false;
      }
    }
  else if ((req1 === true) && (req2 !== true)) {
    minLength = prompt("Minimum password length (8 is recommended):", "8");
    alert(`You selected ${minLength} as your minumum password length`);
    maxLength = prompt("Maximum password length (128 is recommended): ", "128");
    alert(`You selected ${maxLength} as your maximum password length`);
  }
  else {
    minLength = 1;
    maxLength = 128; // if the user does not specify, 128 is automatically set as the max given industry standards
    upperChar = false;
    specChar = false;
    numChar = false;
  }
  function getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  passLength = getRandomInteger(minLength, maxLength);
}

function setCharacters() {
  if ((upperChar === true) && (specChar === true) && (numChar === true)) {  
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!&*$#';
   }
  else if ((upperChar === true) && (specChar === true) && (numChar === false)) {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!&*$#';
  }
  else if ((upperChar === true) && (specChar === false) && (numChar === true)) {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  }
  else if ((upperChar === false) && (specChar === true) && (numChar === true)) {
    characters = 'abcdefghijklmnopqrstuvwxyz0123456789!&*$#';
  }
  else if ((upperChar === true) && (specChar === false) && (numChar === false)) {
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  }
  else if ((upperChar === false) && (specChar === false) && (numChar === true)) {
    characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  }
  else if ((upperChar === false) && (specChar === true) && (numChar === false)) {
    characters = 'abcdefghijklmnopqrstuvwxyz!&*$#';
  }
  else {
    characters = 'abcdefghijklmnopqrstuvwxyz';
  }
  return characters;
}

function generatePassword(_passLength, _characters, _specChars) {
  characterSet = setCharacters();
  var result           = '';
  var charactersLength = characterSet.length;
  for ( var i = 0; i < passLength; i++ ) {
     result += characterSet.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function writePassword() {
  passReqs = passwordReqs();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);