let numDice = prompt("Enter the number of dice:");
let targetSum = prompt("Enter the sum of the eye numbers:");

numDice = parseInt(numDice);
targetSum = parseInt(targetSum);

let successfulRolls = 0;
const totalRolls = 10000;

for (let i = 0; i < totalRolls; i++) {
    let sum = 0;
    for (let j = 0; j < numDice; j++) {
        sum += Math.floor(Math.random() * 6) + 1;
    }
    if (sum === targetSum) {
        successfulRolls++;
    }
}

let probability = (successfulRolls / totalRolls) * 100;

document.write("<p>Probability to get sum " + targetSum + " with " + numDice + " dice is " + probability.toFixed(2) + "%</p>");
