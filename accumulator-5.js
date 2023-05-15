
let numbers = [2, 8, 5, 12, 3, 10, 7, 6, 4, 9];


let accumulatorEven = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        accumulatorEven.push(numbers[i]);
    }
}

console.log(accumulatorEven);
