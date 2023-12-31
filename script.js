function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '−':
            return num1 - num2;
        case '×':
            return num1 * num2;
        case '÷':
            if (num2 === 0)
                return 0; 
            return num1 / num2;
        default:
            return "Error: not a valid operator";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.querySelector("input");
    const buttons = document.querySelectorAll(".calc-button");

    let currentInput = "";
    let currentOperator = "";
    let prevValue = null;
    let result = null;

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonValue = button.textContent;
            // If button pressed is a number
            if (!isNaN(buttonValue)) {
                currentInput += buttonValue;
                inputField.value = currentInput;
            } 
            // If the button pressed is "C" (clear) button
            else if (buttonValue === "C") {
                currentInput = "";
                currentOperator = "";
                prevValue = null;
                result = null;
                inputField.value = "";
            } 
            // If the button pressed is "=" (equals) button
            else if (buttonValue === "=") {
                if (currentInput !== "") {
                    if (prevValue !== null && currentOperator !== "") {
                        result = operate(currentOperator, prevValue, parseFloat(currentInput));
                        inputField.value = result;
                        currentInput = result;
                        prevValue = result;
                        currentOperator = "";
                    }
                }
            } 
            // If the button pressed is an operator button (+, −, ×, ÷)
            else {
                    if (currentInput !== "") {
                        if (prevValue !== null && currentOperator !== "") {
                            // Perform previous operation and store the result as prevValue
                            result = operate(currentOperator, prevValue, parseFloat(currentInput));
                            prevValue = result;
                            currentInput = "";
                            currentOperator = buttonValue;
                        } else {
                            // Set the previous value to the current input and store the operator
                            prevValue = parseFloat(currentInput);
                            currentInput = "";
                            currentOperator = buttonValue;
                    }
                }
            }
        });
    });
});