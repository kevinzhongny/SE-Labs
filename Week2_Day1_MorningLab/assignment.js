//  1. Write a JavaScript that displays the larger of two integers

const int1 = 5;
const int2 = 10;

if (int1 > int2) {
    console.log(int1);
} else if (int1 === int2) {
    console.log('Integers have the same value.');
} else {
    console.log(int2);
}

/* 2. Write an if/else statement for the following requirements:
If student gets 90 or higher: console log  A
If students get 80 or above: console log B
If students get 70 or above: console log C
If students get 55 or above: console log D
Any grade lower than 55 is F */

const grade = 100;
// const grade = 90;
// const grade = 80;
// const grade = 70;
// const grade = 60;
// const grade = -5;

if (grade >= 90 && grade <= 100) {
    console.log('You got an A.');
} else if (grade < 90 && grade >= 80) {
    console.log('You got a B.');
} else if (grade < 80 && grade >= 70) {
    console.log('You got a C.');
} else if (grade < 70 && grade >= 55) {
    console.log('You got a D.');
} else if (grade < 55 && grade >= 0) {
    console.log('You got a D.');
} else if (grade > 100 || grade < 0) {
    console.log('This is not possible.');
}

/* 3. Write a JavaScript program that displays 
    "Good Morning" if time is between 5AM-11:59 | 
    "Good Afternoon" if time is between 12 - 16 | 
    otherwise "Hey there" */

const hour = 5; //define hour from 0-23
const minute = 00; //define minute from 00-59
const min = '00' //define minute as string to bypass floating 0

if (hour < 12 && hour >= 5 && minute < 60 && minute >= 0) {
    console.log('Good Morning, it is ' + hour + ':' + min + '.');
} else if (hour < 16 && hour >= 12 && minute < 60 && minute >= 0) {
    console.log('Good Afternoon, it is ' + hour + ':' + min + '.');
} else if (hour < 24 && hour > 15 && minute < 60 && minute >= 0) {
    console.log('Hey there, it is ' + hour + ':' + min + '.');
} else if (hour >= 0 && hour < 5 && minute < 60 && minute >= 0) {
    console.log('Hey there, it is ' + hour + ':' + min + '.');
}
else {
    console.error('Please check your clock input again.');
}