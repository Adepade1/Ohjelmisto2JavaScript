let startYear = prompt("Enter the start year:");
let endYear = prompt("Enter the end year:");

startYear = parseInt(startYear);
endYear = parseInt(endYear);

let leapYears = [];

for (let year = startYear; year <= endYear; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        leapYears.push(year);
    }
}

document.write("<ul>");
for (let i = 0; i < leapYears.length; i++) {
    document.write("<li>" + leapYears[i] + "</li>");
}
document.write("</ul>");
