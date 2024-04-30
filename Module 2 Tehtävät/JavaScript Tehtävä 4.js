let numbers = [];

while (true) {
    let number = prompt("Enter a number (enter 0 to stop):");
    number = parseInt(number);
    if (number === 0) {
        break;
    }
    numbers.push(number);
}

numbers.sort(function(a, b) {
    return b - a;
});

console.log("Numbers from largest to smallest:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
