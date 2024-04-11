let shouldCalculate = confirm("Should I calculate the square root?");

if (shouldCalculate) {
    let number = prompt("Enter a number:");

    if (number < 0) {
        document.write("<p>The square root of a negative number is not defined.</p>");
    } else {
        let squareRoot = Math.sqrt(number);
        document.write("<p>The square root of " + number + " is " + squareRoot + ".</p>");
    }
} else {
    document.write("<p>The square root is not calculated.</p>");
}
