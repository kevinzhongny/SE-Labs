// 1. What is an efficient way to create an array for first 50 integers?

const numArray = [];

for (i = 0; i < 50; i++) {
    numArray.push(i+1);
}

console.log(numArray);

// 2. Add Hendricks Gin to existing shoppingList.

const shoppingList = [
    "Cool Ranch Doritos", 
    "Kings Hawaiian Sweet Bread",
    "Peanut Butter Oreos",
    "Fruit Loops Cereal"
];

shoppingList.push("Hendricks Gin");
console.log(shoppingList);

// 3. Use the force, or in this case the reverse method to help Yoda make some sense with his motivational talk to the young Jedi interns.

const yoda = ["try", "no", "is", "there", "not", "do", "or", "do"];
yoda.reverse();
console.log(yoda.join(" "));

// 4. iPhone release

const waitList = [
    "Chance the Rapper", 
    "Khalid", 
    "Tay-Tay",
    "Barry Manilow",
    "Piko Taro"
]

const arrLength = waitList.length;
for (serving = 0; serving < arrLength; serving++) {
    console.log(`Now serving:  `+ waitList.splice(0, 1), `\n` + `Wait List: ` + waitList + `\n`);
}

// 5. Help Nike sell overpriced sneakers

const shoe = [
    "just",
    "do",
    "it"
];

// let shoeString = '';

// shoe.forEach((slogan) => {
//     shoeString += slogan + ' ';
// })
// console.log(`\n` + shoeString);

const shoeString = shoe.join(" ");
console.log(shoeString);
