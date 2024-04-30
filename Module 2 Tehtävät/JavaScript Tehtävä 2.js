let numParticipants = prompt("Enter the number of participants:");
let participants = [];

for (let i = 0; i < numParticipants; i++) {
    let name = prompt("Enter the name of participant " + (i + 1) + ":");
    participants.push(name);
}

participants.sort();

document.write("<ol>");
for (let i = 0; i < participants.length; i++) {
    document.write("<li>" + participants[i] + "</li>");
}
document.write("</ol>");
