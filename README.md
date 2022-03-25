# Unit 3 JavaScript: Password Generator Homework

### **Project Description**
The aim of this project was to create a password generator using JavaScript to generate a random password based on the following user specifications: length, character case, numbers, and special characters. While I was able to fully complete the project, there is likely a more efficient algorithm to generate a random password.

What I found most challenging with this project was determining how to distribute the user's specified password length across the criteria "buckets" (upper / lower case, numbers, special characters). I did this through the following steps:

1. Determine password length
2. Determine how many criteria the user has selected
3. Using the % operator, calculate any remainders
4. Subtract the remainder from the specified length to calculate how many characters are needed from each bucket
5. If there are any remainders, then append the password array with random characters until there are no more remainders 

<br/>

### **Algorithm to Distribute Characters**
**Step 1:**
```
var lengthInput = window.prompt("Please indicate your desired password length.\n(Enter a value ≥ 8 and ≤ 128.)");
passLength = parseInt(lengthInput);
```
**Step 2:**
```
var criteria = [addLower, addUpper, addNums, addSpec];
var critCount = 0;    
for (i = 0; i < criteria.length; i++) {
    if (criteria[i]) {
        critCount++;
    }
}
```
**Step 3:**
```
remainder = passLength % critCount;
```
**Step 4:**
```
charsNeed = (passLength - remainder) / critCount;
```
**Step 5:**
```
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
```


<br/>

### **Additional Credit**
Credit goes to [TutorialsPoint](https://www.tutorialspoint.com/what-is-fisher-yates-shuffle-in-javascript) for their Fisher-Davis randomization function. I used this function to scramble elements in the generated password array before outputting it as a string.

```
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
```

<br/>

### **Links**
Access the deployed site [through the following link](https://colinbrindle.github.io/homework-unit-3/).

<br/>

### **Site Screenshots**
![First site screenshot](/assets/images/site1.png)

![Second site screenshot](/assets/images/site2.png)

![Third site screenshot](/assets/images/site3.png)