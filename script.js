let num1;
let num2;
let operator;

function add(num1, num2) {
    return num1+num2;
}

function subtract(num1, num2) {
    return num1-num2;
}

function multiply(num1, num2) {
    return num1*num2;
}

function divide(num1, num2) {
    return num1/num2;
}

function operate(num1, num2, operator) {
    if (operator == "+") {
        add(num1, num2)
    } else if (operator == "-") {
        subtract(num1, num2)
    } else if (operator == "*") {
        multiply(num1, num2)
    } else if (operator == "/") {
        divide(num1, num2)
    }
}

let displayNum = "";
let display = document.getElementById("display")

let clear = document.getElementById("clear");
clear.addEventListener("click", function() {
    display.innerText = 0;
    displayNum = "";
})

function displayPopulator(number) {
    let numberElement = document.getElementById(number)
    let numberContent = numberElement.textContent;
    displayNum += numberContent;
    display.innerText = displayNum;
}

let numberButtons = document.querySelectorAll("#numbers button");

numberButtons.forEach(button => {
    button.addEventListener("click", function() {
        const number = button.id;
        displayPopulator(number);
    });
});
