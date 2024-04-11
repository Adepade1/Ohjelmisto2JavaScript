let number = prompt("Enter an integer:");

number = parseInt(number);

let isPrime = true;

if (number <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    document.write("<p>" + number + " is a prime number.</p>");
} else {
    document.write("<p>" + number + " is not a prime number.</p>");
}
