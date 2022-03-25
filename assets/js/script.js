// Jung's notes on homework:
// Create a generatePassword() function
// Write the logic under that function
// The value that is returned from this will be stored in the password variable
// Hint: separate arrays for lower case, upper case, numbers, special characters
// Hint: Password variable should add all values together "+=" should do this (look it up)

// Assignment Code
var generateBtn = document.querySelector("#generate");

// arrays for password components
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = lowerCase.map(letter => letter.toUpperCase()); // converting to upper case
var numberCase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCase = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "\\", "|", ";", ":", "\"", "'", "`", ",", ".", "<", ">", "/", "?"];

// variables to determine password specifications
var passLength = 0;
var addLower = true;
var addUpper = true;
var addNums = true;
var addSpec = true;
var tempArray = [];

// Write password to the #password input
function writePassword() {
    // calling function to determine password specifications
    passwordSpecs();

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// function to determine password specifications
function passwordSpecs() {
    // variable and prompt to store desired password length
    var lengthInput = window.prompt("Please indicate your desired password length.\n(Enter a value ≥ 8 and ≤ 128.)");

    // converting string input into number type
    passLength = parseInt(lengthInput);

    // checker to see if indicated length is within specified bounds
    if (isNaN(passLength)) {
        window.alert("Please enter a number.");
        passwordSpecs();
    }
    else if (passLength < 8) {
        window.alert("This password will be too short. Please enter a value ≥ 8 or ≤ 128.")
        passwordSpecs();
    }
    else if (passLength > 128) {
        window.alert("This password will be too long. Please enter a value ≥ 8 or ≤ 128.")
        passwordSpecs();
    }
    else { // password criteria selection
        addLower = window.confirm("Would you like to include LOWER CASE characters in your password? (Press 'OK' if yes or 'cancel' if no.)");
        addUpper = window.confirm("Would you like to include UPPER CASE characters in your password? (Press 'OK' if yes or 'cancel' if no.)");
        addNums = window.confirm("Would you like to include NUMBERS in your password? (Press 'OK' if yes or 'cancel' if no.)");
        addSpec = window.confirm("Would you like include SPECIAL CHARACTERS (e.g.: !, @, #, etc.) in your password? (Press 'OK' if yes or 'cancel' if no.)");
    }

    var confirmSelection = window.confirm("Your password will be generated with the following specifications: \n   - Length: " + passLength + "\n   - Lower case: " + addLower + "\n   - Upper case: " + addUpper + "\n   - Numbers: " + addNums + "\n   - Special characters: " + addSpec + "\n\n Press 'OK' to confirm your preferences. Otherwise press 'cancel'.")
}

// function to generate password
function generatePassword() {

    // blank arrays to store random characters
    var genPass = "";
    var passLower = [];
    var passUpper = [];
    var passNumber = [];
    var passSpecial = [];
    var charsNeed = 0;
    var remainder = 0;
    var rndPos = 0;

    // determining number of criteria selected
    var criteria = [addLower, addUpper, addNums, addSpec];
    var critCount = 0;    
    for (i = 0; i < criteria.length; i++) {
        if (criteria[i]) {
            critCount++;
        }
    }

    remainder = passLength % critCount;
    charsNeed = (passLength - remainder) / critCount;

    // array of random lowercase values
    if (addLower) {
        for(i = 0; i < charsNeed; i++) {
            rndPos = Math.floor(Math.random() * lowerCase.length);
            passLower.push(lowerCase[rndPos]);
        }
    }

    // array of random uppercase values
    if (addUpper) {
        for(i = 0; i < charsNeed; i++) {
            rndPos = Math.floor(Math.random() * upperCase.length);
            passUpper.push(upperCase[rndPos]);
        }
    }

    // array of random number values
    if (addNums) {
        for(i = 0; i < charsNeed; i++) {
            rndPos = Math.floor(Math.random() * numberCase.length);
            passNumber.push(numberCase[rndPos]);
        }
    }

    // array of random special characters
    if (addSpec) {
        for(i = 0; i < charsNeed; i++) {
            rndPos = Math.floor(Math.random() * specialCase.length);
            passSpecial.push(specialCase[rndPos]);
        }
    }    

    // dealing with the remainder
    while (remainder > 0) {
        if(addLower) {
            rndPos = Math.floor(Math.random() * lowerCase.length);
            passLower.push(lowerCase[rndPos]);
            remainder--;
        }
        else if (addUpper) {
            rndPos = Math.floor(Math.random() * upperCase.length);
            passUpper.push(upperCase[rndPos]);
            remainder--;
        }
        else if (addNums) {
            rndPos = Math.floor(Math.random() * numberCase.length);
            passNumber.push(numberCase[rndPos]);
            remainder--;
        }
        else {
            rndPos = Math.floor(Math.random() * specialCase.length);
            passSpecial.push(specialCase[rndPos]);
            remainder--;            
        }
    }

    tempArray = passLower.concat(passUpper, passNumber, passSpecial);
    console.log(tempArray);
    
    var scramArray = scramblePass(tempArray);

    genPass = scramArray.join("");

    return genPass;
}

// Fisher-Davis randomization function to scramble the array of passwords and return it as a string. Credit to TutorialsPoint https://www.tutorialspoint.com/what-is-fisher-yates-shuffle-in-javascript
function scramblePass(tempArray) {
    var i = tempArray.length, k, t;
    while (--i > 0) {
        k = Math.floor(Math.random() * (i+1));
        t = tempArray[k];
        tempArray[k] = tempArray[i];
        tempArray[i] = t;
    }
    return tempArray;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
