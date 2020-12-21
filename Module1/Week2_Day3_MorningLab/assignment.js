// 1. Write a n n maxOfTwoNumbers that takes two numbers as arguments and returns 
//    the largest of them. Use the if-then-else construct available in Javascript. Do 
//    some googling to figure this out if you forget how conditionals work. 
function maxOfTwoNumbers(num1, num2) {
    const first = num1;
    const second = num2;
    if (first > second) {
        return first;
    } else if (first < second) {
        return second;
    } else {
        return (`Numbers are the same: ${first}`);
    }
}

console.log(maxOfTwoNumbers(1, 2));
// console.log(maxOfTwoNumbers(3, 2));
// console.log(maxOfTwoNumbers(2, 2));


// 2. Write a function maxOfThree that takes three numbers as arguments and returns 
//    the largest of them. 

// Convoluted, complex code.
// function maxOfThree(a, b, c) {
//     const num1 = a;
//     const num2 = b;
//     const num3 = c;
//     if ((num1 > num2 && num1 > num3) || (num1 > num2 && num1 === num3) || (num1 > num3 && num1 === num2)) {
//         return num1;
//     } else if ((num2 > num1 && num2 > num3) || (num2 > num1 && num2 === num3) || (num2 > num3 && num2 === num1)) {
//         return num2;
//     } else if ((num3 > num1 && num3 > num2) || (num3 > num1 && num3 === num2) || (num3 > num2 && num3 === num1)) {
//         return num3;
//     }
// }

// console.log(maxOfThree(8, 4, 2));

function maxOfThree(a, b, c) {
    let max = Math.max(a, b, c);
    return max;
}

console.log(maxOfThree(5, 6, 7));

// 3.  Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and 
//     returns true if it is a vowel, false otherwise 

function isCharacterAVowel(char) {
    let character = char;
    if (character === 'A' || character === 'E' || character === 'I' || character === 'O'|| character === 'U' ||
        character === 'a' || character === 'e' || character === 'i' || character === ''|| character === 'u') {
        return true;
    } else {
        return false;
    }
}

console.log(isCharacterAVowel('b'));

// 4.  Write a function charCount that takes a string and returns the length of the string.

function charCount(test) {
    let testString = test;
    return (testString.length);
}

console.log(charCount('this is a test'));

// 5. Write a function vowelCount that takes a String and returns the number of vowels in the String. 
//    add a check for the string to be of 10 or less characters.

function vowelCount(vowelString) {
    let testString2 = vowelString;
    let isVowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let numOfVowels = 0;
    let stringPosition = 0;
    if (testString2.length <= 10) {
        while (stringPosition < testString2.length) {
            let arrayPosition = 0;
            while (arrayPosition < isVowel.length) {
                if (testString2.charAt(stringPosition) === isVowel[arrayPosition]) {
                    numOfVowels++;
                    break;
                } else {
                    arrayPosition++;
                }
            }
            stringPosition++;
        }
        console.log(testString2);
        return `There are ${numOfVowels} vowels in this string.`;
    } else {
        return `The string is more than 10 characters.`;
    }
}

console.log(vowelCount('UOIEAuoiea'));

