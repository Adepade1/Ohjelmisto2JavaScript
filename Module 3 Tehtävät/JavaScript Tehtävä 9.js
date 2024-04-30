function calculate() {
    let calculation = document.getElementById("calculation").value.trim();

    let operator;
    if (calculation.includes("+")) {
        operator = "+";
    } else if (calculation.includes("-")) {
        operator = "-";
    } else if (calculation.includes("*")) {
        operator = "*";
    } else if (calculation.includes("/")) {
        operator = "/";
    } else {
        document.getElementById("result").textContent = "Invalid calculation";
        return;
    }

    let operands = calculation.split(operator);
    let num1 = parseInt(operands[0]);
    let num2 = parseInt(operands[1]);

    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
    }

    document.getElementById("result").textContent = "Result: " + result;
}
