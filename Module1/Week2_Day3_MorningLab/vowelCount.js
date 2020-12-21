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

console.log(vowelCount('testpilot'));

