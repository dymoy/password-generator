// Query Selector Variables
var generateBtn = document.querySelector("#generate");
var criteriaSubmitBtn = document.querySelector("#criteria-submit-btn");
const popupContainer = document.querySelector(".criteria-popup-container");
const passLength = document.querySelector('#length');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Show the criteria prompt to the user 
function showCriteriaPrompt() {
  popupContainer.style.display = "flex";  
  passLength.value = 8;
}

// Hide the criteria prompt once the submit button is clicked 
function hideCriteriaPrompt() {
  popupContainer.style.display = "none"; 
  // Set default values to input elements 
  console.log(passLength.value);
}

// Validate that the desired password length is a whole number and within range
function updateLengthVal(change) {
  var newPassLength = Number(change.target.value);

  if (newPassLength < 8 || newPassLength > 128 || (newPassLength % 1) != 0) {
    // if not within range or not a whole number, send alert to window
    alert("Please enter a whole number within range.");
  } else {
    // else if, password meets validation requirements, assign to passLength
    passLength.value = newPassLength;
  }
}

// Event Listeners 
generateBtn.addEventListener("click", showCriteriaPrompt);
criteriaSubmitBtn.addEventListener("click", hideCriteriaPrompt);
passLength.addEventListener('change', updateLengthVal);