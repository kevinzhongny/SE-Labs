// 1. Remove Hall of Famer imposter.

const hof = [
    "Jordan",
    "Bird",
    "Kobe",
    "Duncan",
    "Iverson",
    "Bonner"
]

const notHof = hof.pop();
console.log(`${notHof} is not a Hall of Famer like the following: `, hof);

// 2. McDonald's New Menu

const testMenu = [
    "McPizza Burger",
    "McFly Burger",
    "McLinguine",
    "McChar-Siu Bau",
    "McChop-Chae",
    "McPancit"
]

console.log(`\n` + `I have removed ` + testMenu.splice(2, 2).join(" ") + `.`);
console.log(testMenu + '\n');

// 3. Changes - 2Pac

const westSide = [
    "Dre",
    "2Pac",
    "Snoop"
]

const eastSide = [
    "Biggie",
    "Diddy",
    "Craig Mack"
]

const oneLove = [...westSide, ...eastSide];
console.log(oneLove);

// 4. Kardashians

const fbFriends = [
    "Khalid",
    "Yeezy",
    "Kimmy K",
    "Lamar Odom",
    "Lebron",
    "Warren Buffet"
];

const unfriend = fbFriends.slice(1, 4);
console.log(`\nI have unfriended these ungrateful folks.`);
console.log(unfriend);

// 5. Create a user profile using a map.

const user1 = {
    first_name: 'Kevin',
    last_name: 'Zhong',
    company: 'Per Scholas',
    department: 'Software Engineer-Bronx'
}

console.log(user1);
console.log(`\n`);

// 6. Challenge: Objects - Iterating with for...in

const checkObj = {
    oddNum: 1,
    evenNum: 2,
    foundNum: 5,
    randomNum: 18
  };
  
const objToArray = [];
for(test in checkObj) {
    if (checkObj[test] >=2) {
        objToArray.push(checkObj[test]);
    }
}

console.log(objToArray);

// 7. Challenge: Objects - Iterating with a for loop

let divBy6 = false;

const objToArray2 = Object.values(checkObj);

objToArray2.forEach(test => {
  if (test%6 === 0) {
    divBy6 = true;
    console.log(`\n` + test + ` is divisible by 6.`);
  }
})
