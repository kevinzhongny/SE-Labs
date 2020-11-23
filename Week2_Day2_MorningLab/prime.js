//  1. Using a while loop, print out all prime numbers between 0 - 20

let prime = 2;
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