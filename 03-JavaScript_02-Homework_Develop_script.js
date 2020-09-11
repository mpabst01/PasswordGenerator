var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var generateBtn = document.getElementById('generateBtn')
var longPass = "eokfbppwisvsfcjbbsaqoqrudhocuauyqefuvuqennyspkvqcviqlclojbtdbnduujordgvstukleidgdoyrqjhzkcfosikotafzgbrbxeobmujrihiytszfuevopfci"
generateBtn.addEventListener('click', writePassword)


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
  
  var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 12 but less than 128.");





  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var special = confirm("Do you want special characters in your password?");

  var minimumCount = 0;



  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";
  
  // for (var passwordLength=0; passwordLength<longPass.length; passwordLength++) {
  //   window.location.href = "index.html";


    
  // }

  

  // for (var passwordLength=0; passwordLength<12; passwordLength++) {

  //   window.location.href = "index.html";


    
  // }


  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

};


  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;

  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;

  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;

  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;

  }

  var randomPasswordGenerated = "";


  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;

  }

  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


  return randomPasswordGenerated;


}

generateBtn.addEventListener("click", writePassword);
alert("This is your generated password: " + randomPasswordGenerated)
