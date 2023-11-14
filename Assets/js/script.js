// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  getCriteria();
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Gets user input for password criteria and returns a string
function getCriteria() {
  document.querySelector(".criteria-popup-container").style.display = "flex";
}

function getCheckBoxValues(form) {
  console.log('entered');
  let values = [];
  let checkboxes = form.criteria;

  for (let i = 0, formLength = checkboxes.length; i < formLength; i++) {
    if (checkboxes[i].checked) {
      values.push(checkboxes[i].value);
    }
  }
  console.log(values)
  document.querySelector(".criteria-popup-container").style.display = "none";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
