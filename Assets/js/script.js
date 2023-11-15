// Query Selector Variables
var generateBtn = document.querySelector("#generate");
var criteriaSubmitBtn = document.querySelector("#criteria-submit-btn");
const popupContainer = document.querySelector(".criteria-popup-container");
const passLength = document.querySelector('#length');

const includeLower = document.getElementById('lowercase');
const includeUpper = document.getElementById('uppercase');
const includeNumbers = document.getElementById('numbers');
const includeSpecial = document.getElementById('special');

// Define character sets for each criteria 
const lowerCharSet = 'abcdefghijklmnopqrstuvwxyz';
const upperCharSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberCharSet = '0123456789';
const specialCharSet = '/^[!@#$%^&*()_+\-=\[\]{};\':"\\|,.<>\/?]*$/;';

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Generate the password based on the set criteria
function generatePassword() {
  let result = '';
  const length = passLength.value;

  for (let i = 0; i < length; i++) {
    // If includeLower is checked, add a random character from lowercase character set 
    if (includeLower.checked) {
      result += getRandomChar(lowerCharSet)
    }
    // If includeUpper is checked, add a random character from uppercase character set
    if (includeUpper.checked) {
      result += getRandomChar(upperCharSet);
    }
    // If includeNumbers is checked, add a random character from the number character set
    if (includeNumbers.checked) {
      result += getRandomChar(numberCharSet);
    }
    // if includeSpecial is checked, add a random character from the special character set
    if (includeSpecial.checked) {
      result += getRandomChar(specialCharSet);
    }
  }

  // Slice out all characters after the desired length is met 
  result = result.slice(0, length);
  return result;
}

// Returns a random character from the character set parameter passed 
function getRandomChar(charSet) {
  return charSet[Math.floor(Math.random() * charSet.length)];
}

// Show the criteria prompt to the user 
function showCriteriaPrompt() {
  popupContainer.style.display = "flex";  
  
  // Set default values for input elements 
  passLength.value = 8;
  includeLower.checked = true;
  includeUpper.checked = true;
  includeNumbers.checked = true;
  includeSpecial.checked = true;
}

// Hide the criteria prompt once the submit button is clicked 
function hideCriteriaPrompt() {
  popupContainer.style.display = "none"; 
  writePassword();
}

// Validate that the desired password length is a whole number and within range
function updateLengthVal(change) {
  var newPassLength = Number(change.target.value);
  if (newPassLength < 8 || newPassLength > 128 || (newPassLength % 1) != 0) {
    // if not within range or not a whole number, send alert to window
    alert("Please enter a whole number within range.");
    change.target.value = 8;
  } else {
    // else if, password meets validation requirements, assign to passLength
    passLength.value = newPassLength;
  }
}

// Validate that at least 1 character type check box is checked
function validateCheckBox() {
  if(!includeLower.checked && !includeUpper.checked && !includeNumbers.checked && !includeSpecial.checked) {
    alert("You must include at least 1 character type in your password.");
    includeLower.checked = true;
    includeUpper.checked = true;
    includeNumbers.checked = true;
    includeSpecial.checked = true;
  } 
}

// Event Listeners 
generateBtn.addEventListener("click", showCriteriaPrompt);
criteriaSubmitBtn.addEventListener("click", hideCriteriaPrompt);
passLength.addEventListener('change', updateLengthVal);
includeLower.addEventListener('change', validateCheckBox);
includeUpper.addEventListener('change', validateCheckBox);
includeNumbers.addEventListener('change', validateCheckBox);
includeSpecial.addEventListener('change', validateCheckBox);