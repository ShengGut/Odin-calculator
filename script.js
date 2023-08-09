function operate (operator, num1, num2) {
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

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonValue = button.textContent;
            
            if (!isNaN(buttonValue) || buttonValue === ".") {
                currentInput += buttonValue;
                inputField.value = currentInput;
            } else if (buttonValue === "C") {
                currentInput = "";
                currentOperator = "";
                prevValue = null;
                inputField.value = "";
            } else if (buttonValue === "=") {
                if (currentInput !== "") {
                    if (prevValue !== null && currentOperator !== "") {
                        const result = operate(currentOperator, prevValue, parseFloat(currentInput));
                        inputField.value = result;
                        currentInput = result;
                        prevValue = null;
                        currentOperator = "";
                    }
                }
            } else {
                    if (currentInput !== "") {
                        prevValue = parseFloat(currentInput);
                        currentInput = "";
                        currentOperator = buttonValue;
                    }
                }
        });
    });
});