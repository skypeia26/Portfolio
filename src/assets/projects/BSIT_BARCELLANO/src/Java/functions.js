//Even number function
let num = prompt("Enter a value to see if it is even: ");
function checkEven(){
    let value;
    if(num%2==0){
        return value = true;
    }
    else{

    }
}
console.log("Is the number "+num+" even? \nAnswer: "+checkEven());



//Reversed word function
let inputText = prompt("Enter a word to be reversed: ");
function revWord(str){
    let revString = "";
    for(let i = str.length - 1; i >= 0; i--){
        revString += str[i];
    }
    return reversedString;
}
console.log("\nFirst text: "+inputText+
            "\nRev version: "+revWord(inputText));



//Factorial function
let inputLoop = true;
let inputFactor;
while(inputLoop==true){
    inputFactor = prompt("Enter positive int to calculate the factorial of it: ");
    if(inputFactor>0){
        break;
    }
}

function factorialNum(factNum){
    let factorialResult = 1;
    for(let i = factNum; i>=1; i--){
        factorialResult *= i;
    }
    return factorialResult;
}
console.log("\nInput number: "+inputFactor+
            "\n"+inputFactor+"! is equal to "+factorialNum(inputFactor));



//Counting a specific letter within a string
function countChar(str, char){
    let charCount = 0;
    for(i = 0; i<str.length; i++){
        if(str.charAt(i)==char){
            charCount+=1;
        }
    }
    return charCount;
}

let stringToCount = prompt("Enter a character that will be counted: ");
let charToCount = prompt("Enter character to be counted: ");

let unifiedString = stringToCount.toLowerCase();
let unifiedChar = charToCount.toLocaleLowerCase();

console.log("\nThere are "+countChar(unifiedString,unifiedChar)+" instance(s) of the letter \'"+charToCount+"\' in the string \""+stringToCount+"\"");



//Random Password Generator
let inputLength;
while(inputLoop==true){
    inputLength = prompt("Enter a random password (min of 8 characters): ");
    if(inputLength>7){
        break;
    }
}

function generatePassword(length) {
    let uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercases = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let specials = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    let allCharacters = uppercases + lowercases + numbers + specials;
    let password = "";

    password += uppercases.charAt(Math.floor(Math.random() * uppercases.length));
    password += lowercases.charAt(Math.floor(Math.random() * lowercases.length));
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    password += specials.charAt(Math.floor(Math.random() * specials.length));

    for (let i = 0; i < length-4; i++) {
        let randomChar = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters.substring(randomChar,randomChar+1);
    }
    password = password.split('').sort(function(){return 0.5-Math.random()}).join('');
    return password;
  }
  
  let password = generatePassword(inputLength);
  console.log("\n Random password: "+password);