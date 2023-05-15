
let numbers = [-2, 5, -10, 3, 8, -4, 0, -7, 1, -6];


let accumulator = 0;
let i = 0;
while (i < numbers.length) {
    if (numbers[i] > 0) {
        accumulator += numbers[i];
    }
    i++;
}

console.log(accumulator);
