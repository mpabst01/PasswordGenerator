// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var specialChar = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];
var numChar = [0,1,2,3,4,5,6,7,8,9];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function passOptions() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  
  var length = parseInt(prompt("How many characters would you like your password to contain?"));

  //passwordText.value = password;

  if (length < 8) {
    alert('The password must be at least 8 characters!');
    return;
  }
  
  if (length > 128) {
    alert('The password must be less than 128 characters!');
    return;
  }

  var shouldIncludeSpecialCharacters = confirm("Do you want to include special characters?");
  var shouldIncludeNumeric = confirm("Do you want to include numeric characters?");
  var shouldIncludeLowercase = confirm("Do you want to include lowercase characters?");
  var shouldIncludeUppercase = confirm("Do you want to include uppercase characters?");

  if (!shouldIncludeLowercase && !shouldIncludeUppercase && !shouldIncludeNumeric && !shouldIncludeSpecialCharacters) {
    alert("Your password must contain at least one special, numeric, lowercase, or uppercase character");
    return;
  }

  
  var questionOptions = {
    length: length,
    specialCharacters: shouldIncludeSpecialCharacters,
    numeric: shouldIncludeNumeric,
    lowCase: shouldIncludeLowercase,
    upCase: shouldIncludeUppercase
  }
  return questionOptions;

}
function generatePassword() {

  var options = generateOptions();
  console.log(options)

  var passwordPool = [];
  console.log(passwordPool)

  if (options.specialCharacters) {
      for (i = 0; i < specialChar.length; ++i) {
          passwordPool.push(specialChar[i]);
      }
  } 
  if (options.numeric) {
      for (i = 0; i < numChar.length; ++i) {
      passwordPool.push(numChar[i]);
      }
  }
  if (options.lowCase) {
      for (i = 0; i < lowerCase.length; ++i) {
      passwordPool.push(lowerCase[i]);
      }
  }
  if (options.upCase) {
      for (i = 0; i < upperCase.length; ++i) {
      passwordPool.push(upperCase[i]);
      }
  }

  var finalPassword = [];

    for (let i = 0; i < options.length; ++i) {
        var randomPicker = Math.floor(Math.random() * Math.floor(passwordPool.length));
         finalPassword.push(passwordPool[randomPicker])
    }

    console.log(finalPassword)

    var superFinal = finalPassword.join('');
    console.log(superFinal)

    document.getElementById("display").textContent = superFinal;
    
    var password = "";

    



  }





// Add event listener to generate button
generateBtn.addEventListener("click", passOptions);

alert("This is your password: " + superFinal);
