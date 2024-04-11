let numDiceRolls = prompt("How many dice rolls do you want?");

numDiceRolls = parseInt(numDiceRolls);

let sum = 0;

for (let i = 0; i < numDiceRolls; i++) {
    let rollResult = Math.floor(Math.random() * 6) + 1;

    sum += rollResult;
}

console.log("Sum of dice rolls:", sum);
