let year = prompt("Enter a year:");

let isLeapYear = false;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    isLeapYear = true;
}

if (isLeapYear) {
    document.write("<p>" + year + " is a leap year.</p>");
} else {
    document.write("<p>" + year + " is not a leap year.</p>");
}
