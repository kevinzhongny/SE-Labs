//  1. Using a while loop, print out all prime numbers between 0 - 20

let prime = 1
while (prime < 20) {
    let test = 2;
    while (prime >= test) {
        if (prime % test === 0 && prime != test) {
            break;
        } else if (prime === test) {
            console.log(prime);
            break;
        } else {
            test++;
        }
    }
    prime++;
}

// 2. Use a while loop to add up the numbers 1 to 20 into one variable. Print out the sum at the end
let sum = 0;
let num = 1;
while (num <=20) {
    sum += num;
    if (num === 20) {
        console.log('\n' + 'Sum = ' + sum + '\n');
    }
    num++;
}

// 3. Use a while loop to print out the even number from 1 to 20. (You'll need Modulus for this. And an IF Statement.)

let checkEven = 1;
while (checkEven <= 20) {
    if (checkEven % 2 === 0) {
        console.log(+ checkEven);
    }
    checkEven++;
}

// 4.While loops Fundamentals: https://csx.codesmith.io/units/precourse-part-2/challenge-while-loops-fundamentals
let count = 2;

while (count < 8) {
  count++;
}

console.log('\n' + count); 