// Question 1
// var myRegex = /[A-Z]/;

// function testUppercase() {
//     if(myRegex.test('Hello')) {
//         alert('The first character of the string is an upper case.')
//     } else {
//         alert('The first character of the string is not an upper case.')
//     }
// }

// testUppercase();

// Question 3  
// Write a pattern that matches e-mail addresses. 
// The personal information part contains the following ASCII characters.

// Uppercase (A-Z) and lowercase (a-z) English letters.
// Digits (0-9).
// Characters ! # $ % & ‘ * + – / = ? ^ _ ` { | } ~
// Character . ( period, dot or fullstop) provided that it is not the first or last 
// character and it will not come one after the other.

// var emailCheck = prompt("Enter your email address.");

// if (/[A-Za-z0-9.]+@[A-Za-z0-9.]+\.[a-z]{2,6}/.test(emailCheck)) {
//     alert("Your email address has been validated.");
// } else {
//     alert("Your email address is incorrect!");
// }

// Question 8 

// Write a JavaScript function to count the number of vowels in a given string. 
// Test Data: 
// console.log(count_vowels(‘United States’));
// Output : 
// 5 vowels.

// we need to search for [aeiou], then count each one

// var sentence = "Ioodbye";

// var result = sentence.match(/[aeiou]/ig);

// alert(`There are ${result.length} vowels, ${result}`);

// Question 21 

// Write a JavaScript function to print an integer with commas as thousands separators.
// Test Data :
// console.log(thousands_separators(1000)); 
// “1,000”
// console.log(thousands_separators(10000.23)); 
// “10,000.23”
// console.log(thousands_separators(100000));
// “100,000”

// var myRegex = /[0-9]/;
// we need to 

var number1 = '10000.23';
var number2 = ''



var result = number.split(/([0-9]{3})$/g); 
// \d
console.log(result);

function commaSeperator() {
    if (/result \./) {
        result = number.
    }
}

// var findResult = result.split(/\d/);
// console.log(findResult);

// if (number has a decimal) {
//     var result1 = result.split
// }




// for (let i = 0; i < result.length; i++) {
//     let secondResult = result[1];
//     console.log(secondResult);
// }
