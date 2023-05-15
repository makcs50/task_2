
let names = ["Alice", "Bob", "Alex", "Anna", "Andrew", "Amy", "Adam", "Alan", "Eve", "Emily"];


let accumulator = [];
for (let i = 0; i < names.length; i++) {
    if (names[i][0].toLowerCase() === 'a') {
        accumulator.push(names[i]);
    }
}

console.log(accumulator);

