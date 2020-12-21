class vendingMachine {
    inventory = [];
    constructor(snack1, snack2, snack3) {
        this.inventory[0] = snack1;
        this.inventory[1] = snack2;
        this.inventory[2] = snack3;
    }
    vend(chooseSnack) {
        return this.inventory[chooseSnack];
    }
}

class Snack {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    snackDetails() {
        console.log(`This snack is ${this.name} for $${this.name}.`);
    }
}

const chocolate = new Snack("Snickers", 1.00);
const drink = new Snack("Gatorade", 2.99);
const chips = new Snack("Cheetos", 1.99);
const workVendingMachine = new vendingMachine(chocolate, drink, chips);
console.log(`You have purchased ${workVendingMachine.vend(0).name} for $${workVendingMachine.vend(0).price}.`);