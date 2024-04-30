let dogs = [];

for (let i = 0; i < 6; i++) {
    let dogName = prompt("Enter the name of dog " + (i + 1) + ":");
    dogs.push(dogName);
}

dogs.sort().reverse();

document.write("<ul>");
for (let i = 0; i < dogs.length; i++) {
    document.write("<li>" + dogs[i] + "</li>");
}
document.write("</ul>");
