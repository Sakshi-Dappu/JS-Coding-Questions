// Question 1
// const user = {
//     name: 'Raj',
//     age: 20,
//     address: {
//         city: 'Delhi'
//     }
// }
// const newUser = Object.assign({}, user);

// newUser.age = '24';
// newUser.address.city = 'Gurugram';

// const {age, address: {city}} = user;
// console.log(age);
// console.log(city);

// OUTPUT ⇒ 20 Gurugram
// Since the Object.assign shallow copies the object only the upper layer i.e 
//name and age cant be modified. 
//The city which is nested can be modified 
// hence age is 20 city is Gurugram


//////////////////////////////////////////////////////////////////////////

//      Q 2
//       WAF that returns the reverse of a string ?

// METHOD 1:
// function reverseString(name) {
//     let reverseName = "";
//     for(let i=name.length - 1; i>=0; i--) {
//     reverseName += name[i];
//     }
//     console.log(reverseName);
//     }
// reverseString("YUG ramaswami Dappu");
// `//METHOD 2:
// function reverseString(str) {
// return str.split("").reverse().join("");
// }
// console.log(reverseString('Madhavi'));

/////////////////////////////////////////////////////////////////////////


// Question 3

//   **//Write a function that returns the longest word in the sentence?**

// `function LongestWord(Sentence) {
// let longest_word = "";
// const words = Sentence.split(" ");
// for ( let word of words) {
// if(word.length > longest_word.length) {
// longest_word = word;
// }
// }
// return longest_word;
// }
// `console.log(LongestWord("I Love coding in Javascript"));

//////////////////////////////////////////////////////////////////////////

// Question 4
//Write a function to check whether the word is palindrome or not?**

//Palindrome is word which when read from start and end are the same words
//eg:    anna , racecar
// function isPalindrome(word) {
//     let reversedWord = word.toLowerCase().split("").reverse().join("");
//     if (word.toLowerCase() === reversedWord) {
//     return ('Is a Palindrom : )');
//     } else {
//     return ('Not a Palindrom : (');
//     }
//     }
//     console.log(isPalindrome("raecar"));


/////////////////////////////////////////////////////////////////////////


//Question 5
//write a fuction to remove duplicates from a string


//function RemoveDuplicates(arr) {
// let UniqueArray = [];
// for ( let i = 0; i < arr.length; i ++) {
// if( UniqueArray.indexOf(arr[i]) === -1) {
// UniqueArray += arr[i];
// }
// }
// console.log(UniqueArray);
// }`

// `RemoveDuplicates([1, 2, 3, 4, 4, 5, 6, 6]);


/////////////////////////////////////////////////////////////////////////


// Question 6
//// write a function that checks whether two strings are anagrams or not ?
//output should be True or false.



// function checkAnagram(str1, str2) {
//     const sortedstr1 = str1.split("").sort().join("");
//     const sortedstr2 = str2.split("").sort().join("");
//     return sortedstr1 === sortedstr2;
//     }
//     console.log(checkAnagram('silent', 'listen')) ;


/////////////////////////////////////////////////////////////////////////


// Question 7

//write a function that returns the number of vowels in a string.


// function Count_Vowels(str) {
//     let count = 0;
//     let vowels = ['a','e','i','o','u'];
//     for(let char of str.toLowerCase()) {
//         if( vowels.includes(char)) {
//             count ++;
//         }
//     }
//     return count;
//     }
    
//     console.log(Count_Vowels("Hello world !"));


////////////////////////////////////////////////////////////////////////

// Question 8
// //Write a func to calculate the largest number in an array


//Method 1

// function findLargestNumber(arr) {
//     let largestNumber = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//     if(arr[i] > largestNumber) {
//     largestNumber = arr[i];
//     }
//     }
//     return largestNumber;
//     }
//     console.log(findLargestNumber([2,4,6,9,3]));
    
//     //Method 2
    
//     function LargestDigit(arr){
//     return arr.reduce((current, largest) => (current > largest ?  current : largest ), arr[0]);
//     }
    
//     console.log(LargestDigit([2,4,6,9,3]));


///////////////////////////////////////////////////////////////////////

// Question 9

//     Write a function to check if a given number is a prime number or not?    
// function isPrime(num) {
//     if (num < 1) {
//     return false;
//     }
//     if (num == 1) {
//     return true;
//     }
//     for (let i = 2; i < num / 2; i++){
//     if (num % i === 0) {
//     return false;
//     }
//     }
//     return true;
//     }
//     console.log(isPrime(6));

///////////////////////////////////////////////////////////////////////

// Question 10
//     Write a function to calculate the factorial      


// function findFactorial(num) {
//     if (num < 0) {
//     console.log('Factorial is not defined for negative numbers');
//     return; // Factorial is not defined for negative numbers
//     }
//     // Base case for 0! and 1!
//     if (num === 0 || num === 1) {
//         console.log('Factorial of', num, 'is 1');
//         return; // Both 0! and 1! are 1
//     }
    
//     let factorial = 1;
//     for (let i = 2; i <= num; i++) {
//         factorial *= i; // Multiply i with the current factorial value
//     }
//     console.log('Factorial of', num, 'is:', factorial);
//     }
    
//     findFactorial(6); // Example usage



/////////////////////////////////////////////////////////////////////

// Question 10
// Write a function to remove all whitespace characters from a string.

// function RemoveWhiteSpaces(str) {
//     let Transformed_str = str.replace(/\s/g, "");
//     console.log(Transformed_str);
// }

// RemoveWhiteSpaces('H  I , My   name is s   akshi');

// NOTE: Step1: Use a regular expression
//Step2: The \s pattern matches whitespace characters,
// including spaces, tabs, and line breaks.
// The g flag is used to perform a global search
// and replace, replacing all occureneces.