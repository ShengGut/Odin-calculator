
function add(a, b) {
	return a + b;
}

function subtract (a, b){
    return a - b;
}

function multiply (a,b) {
    return a * b;
  };

function divide (a,b) {
    if (b == 0)
    return 0;
    else
    return a / b;
  };

function operate(operator, a, b) {
    return operator(a,b);
}

console.log(add(2,2));
console.log(subtract(2,2));
console.log(multiply(2,2));
console.log(divide(2,2));