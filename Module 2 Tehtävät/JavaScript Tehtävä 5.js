let numbers = [];
let number;

while (true) {
    number = prompt("Enter a number (enter 0 to stop):");
    number = parseInt(number);
    if (numbers.includes(number)) {
        console.log("Number " + number + " has already been given.");
        break;
    }
    if (number === 0) {
        break;
    }
    numbers.push(number);
}

numbers.sort(function(a, b) {
    return a - b;
});

console.log("Given numbers in ascending order:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
