const generateBtn = document.querySelector("#generate");

function numOfCharacters(){
  // when prompted chose a lenght of at least 8 - 128 characters
  const passwordLenght = prompt("Please choose password lenght between 8 - 128 characters");
  // only accept numeric value between the two numbers
  if (passwordLenght >= 8 && passwordLenght <= 128) {
    return passwordLenght;
  } else {
    return numOfCharacters();
  };
}

function criteriaSelected() {
  // confirm to include or not include lower case letters
  let userSelection = "";
  const allowLowerCase = confirm("Do you want to include lower case letters?");
  if (allowLowerCase) {
    userSelection = userSelection + 'abcdefghijklmnopqrstuvwxyz';
  };
  // confirm to include or not include upper case letters
  const allowUpperCase = confirm("Do you want to include upper case letters?");
  if (allowUpperCase) {
    userSelection = userSelection + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  };
  // confirm to include or not include numerics
  const allowNumerics = confirm("Do you want to include numeric characters?");
  if (allowNumerics) {
    userSelection = userSelection + '1234567890';
  };
  // confirm to include or not include special characters
  const allowSpecial = confirm("Do you want to include special characters?");
  if (allowSpecial) {
    userSelection = userSelection + '!@#$%^&*()_+-={[}]:;"<,>.?/';
  };
  // at least one character type should be selected
  if (allowLowerCase || allowUpperCase || allowNumerics || allowSpecial) {
    // input should be validated 
    return {
      userSelection,
    };
  };
  confirm("Please ensure at least one character type is selected");
  return criteriaSelected();
};

// Add event listener to generate button
generateBtn.addEventListener("click", function(event) {

  const passwordLenght = numOfCharacters();
  const criteria = criteriaSelected();

  let password = "";
  // passwords should be generated that matches criteria selected
  for (let i = 0; i < passwordLenght; i++) {
    let chosenCharacters = criteria.userSelection [Math.floor(Math.random() * criteria.userSelection.length)];
    password += chosenCharacters
  };
  // Write password to the #password input
  document.getElementById('password').value = password;    
});









