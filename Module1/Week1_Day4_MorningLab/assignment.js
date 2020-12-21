
/* const stringAndNumString = "Hello + 2+ 2+ 2+ 2+ 2+ 2+ 2+ 2+ 2" + '+';
console.log(stringAndNumString);
// > Hello 18+
// > Hello + 2+ 2+ 2+ 2+ 2+ 2+ 2+ 2+ 2+ */

/* let x, y, z;
x = 1200;
y = z;
z = x + y; */
// > no output
// > no output

/* const bondJames = 007;
console.log(BondJames);
> error
> BondJames is not defined */

/* let y = 12;
console.log(y + 1 + x);
// > error, y & x are already defined
// > SyntaxError: Identifier 'y' has already been declared */

const num1 = 8;
const num2 = 3;
const num3 = 2;
const num4 = 9;
const num5 = 1;
const num6 = 7;
const num7 = 6;
const num8 = 4;
const num9 = 0;
const num10 = 5;
let sum = (num1 + num2 - num3) / num4;
console.log(sum);

let testArray = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num10];
let n = 0;
for (i=0; i<5; i++) {
    n += testArray[i];
}
let avg1 = n/5;
console.log('The average of the first 5 numbers in this array is ' + avg1 + '.');

let o = 0;
for (i; i<10; i++) {
    o += testArray[i];
}
let avg2 = o/5;
console.log('The average of the last 5 numbers in this array is ' + avg2 + '.');
console.log('The average of these two sums is ' + (avg1 + avg2)/2 + '.');

let labA1 = 4;
let labA2 = 10;
let labA3 = 22;
let labA4 = -30;
let labA5 = 55;
let labAAvg = (labA1 + labA2 + labA3 + labA4 + labA5) / 5;
console.log('The avg of (4, 10, 22, -30, 55) is ' + labAAvg + ".")

let labB1 = 68;
let labB2 = 7;
let labB3 = -22;
let labB4 = 9;
let labB5 = 100;
let labBAvg = (labB1 + labB2 + labB3 + labB4 + labB5) / 5;
console.log('The avg of (68, 7, -22, 9, 100) is ' + labBAvg + '.');

const name = 'Kevin';
const greeting = 'Hello, I am ' + name + '!';
console.log(greeting);

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('What is your name? ', inputName => {
    console.log(`Hello, ${inputName}!`);
    readline.close();
});





