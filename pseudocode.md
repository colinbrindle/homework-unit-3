## Generate password function

### Specifications
- When button is clicked prompts are presented for the following:
    - Password length: 8 <= length <= 128
    - Lowercase confirmation: Yes No
    - Uppercase confirmation: Yes No
    - Numeric confirmation: Yes No
    - Special character confirmation: Yes No
- When user has gone through prompts, then:
    - Alert confirming the above criteria
- When alert is closed, then:
    - Password is generated with indicated criteria
    - Password is written on the page

### Function pseudocode
Arrays:
- var lowerCase = [a, b, c, ...];
- var upperCase = [A, B, C, ...];
- var numberCase = [1 ,2, 3, ...];
- var specialCase = [!, @, #, ...];

Variables:
- var passLength = 0; (Value between 8 and 128)

function passwordSpecs() {

    var lengthInput = window.prompt("How long of a password do you want? Enter a value greater than or equal to 8 and less than or equal to 128");

    passLength = parseInt(lengthInput);
    
    if (passLength < 8) {
        window.alert("Password too short. Please enter a value >= 8 or <= 128");
    }
    else if (passLength >128) {
        window.alert("Password too long. Please enter a value >= 8 or <= 128");
    }
    else {
        return;
    }
}

### function generatePassword () {}
1. Determine number of characters needed from each array
    - var remainder = passLength % critCount;
    - var charsNeeded = (passLength - remainder)/critCount; This will allow for even character distribution among selected specifications
2. Create new arrays with randomly selected characters from lowerCase, upperCase, numberCase, specialCase
    - var passLower = []; var passUpper = []; var passNumber = []; var passSpecial = [];
3. Concatenate new arrays
4. [EXTRA] Randomize characters in new array
5. Return array as a string


function generatePassword() {}

    var criteria = [lowerCase, upperCase, numberCase, specialCase];
    var critCount = 0;
    for(i = 0; i < criteria.length; i++) {
        if (criteria[i]) {
            critCount++
        }
    }