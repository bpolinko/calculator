let first = "";
let second = "";
let operator = "";
let result = 0;
let currentInput = "";
let needsCleared = false;


function add (first, second) {
    return result = Number(first) + Number(second);
}

function subtract (first, second) {
    return result = Number(first) - Number(second);
}

function multiply (first, second) {
    return result = Number(first) * Number(second);
}

function divide (first, second) {
    return result = Number(first) / Number(second);
}

function operate (first, second, operator) {
    switch (operator) {
        case "+": add(first,second);
        break;
        case "-": subtract(first,second);
        break;
        case "*": multiply(first, second);
        break;
        case "/": divide(first, second);
    }
}

function clickEquals() {
    second = currentInput;
    operate(first, second, operator);
    currentInput = result;
    updateDisplay();
    first = "";
    operator = "";
    second = "";
    result = 0;
    needsCleared = true;
}

function clickPlus() {
    needsCleared = false;
    if (first != "" && operator != "" && currentInput != "+") {
        second = currentInput;
        operate(first, second, operator);
        currentInput = result;
        updateDisplay();
        first = result;
        second = "";
        operator = "+";
        currentInput = "";
    }
    else if (currentInput == "-" || currentInput == "+" || currentInput == "*" || currentInput == "/") {
        operator = "+";
    currentInput = "+";
    updateDisplay();
    }
    else {
    first = currentInput;
    operator = "+";
    currentInput = "+"
    updateDisplay();
     }
}

function clickMinus() {
    needsCleared = false;
    if (first != "" && operator != "" && currentInput != "-") {
        second = currentInput;
        operate(first, second, operator);
        currentInput = result;
        updateDisplay();
        first = result;
        second = "";
        operator = "-";
        currentInput = "";
    }
    else if (currentInput == "-" || currentInput == "+" || currentInput == "*" || currentInput == "/") {
        operator = "-";
    currentInput = "-";
    updateDisplay();
    }
    else {
    first = currentInput;
    operator = "-";
    currentInput = "-";
    updateDisplay();
    }
}

function clickMultiply() {
    needsCleared = false;
    if (first != "" && operator != "" && currentInput != "*") {
        second = currentInput;
        operate(first, second, operator);
        currentInput = result;
        updateDisplay();
        first = result;
        second = "";
        operator = "*";
        currentInput = "";
    }
    else if (currentInput == "-" || currentInput == "+" || currentInput == "*" || currentInput == "/") {
        operator = "*";
    currentInput = "*";
    updateDisplay();
    }
    else {
    first = currentInput;
    operator = "*";
    currentInput = "*";
    updateDisplay();
    }
}


function clickDivide() {
    needsCleared = false;
    if (first != "" && operator != "" && currentInput != "/") {
        second = currentInput;
        operate(first, second, operator);
        currentInput = result;
        updateDisplay();
        first = result;
        second = "";
        operator = "/";
        currentInput = "";
    }
    else if (currentInput == "-" || currentInput == "+" || currentInput == "*" || currentInput == "/") {
        operator = "/";
    currentInput = "/";
    updateDisplay();
    }
    else {
    first = currentInput;
    operator = "/";
    currentInput = "/";
    updateDisplay();
    }
}

function clickPlusMinus() {
    let flip = Number(currentInput);
    currentInput = -flip;
    updateDisplay();
}

function clickPercent() {
    let percent = Number(currentInput) / 100;
    currentInput = percent;
    updateDisplay();
}

const display = document.querySelector("#display");
function updateDisplay () {
    display.textContent = currentInput;
    
}



function clickOne() {
    if (needsCleared == true) {
    currentInput = "";
    first = "";
    second = "";
    operator = "";
    needsCleared = false;
    }
    if (currentInput == "+" || currentInput == "-" || currentInput == "*" || currentInput == "/") {
        currentInput ="1"
        
    } else {
    currentInput += "1"
    }
    updateDisplay();
}

function clickTwo() {
    if (needsCleared == true) {
        currentInput = "";
        first = "";
        second = "";
        operator = "";
        needsCleared = false;
        }
    if (currentInput == "+" || currentInput == "-" || currentInput == "*" || currentInput == "/") {
        currentInput ="2"
    } else {
    currentInput += "2"
    }
    updateDisplay();
}

function clickThree() {
    if (needsCleared == true) {
        currentInput = "";
        first = "";
        second = "";
        operator = "";
        needsCleared = false;
        }
    if (currentInput == "+" || currentInput == "-" || currentInput == "*" || currentInput == "/") {
        currentInput ="3"
    } else {
    currentInput += "3"
    }
    updateDisplay();
}

function clickFour() {
    if (needsCleared == true) {
        currentInput = "";
        first = "";
        second = "";
        operator = "";
        needsCleared = false;
        }
    if (currentInput == "+" || currentInput == "-" || currentInput == "*" || currentInput == "/") {
        currentInput = "4"
    } else {
    currentInput += "4"
    }
    updateDisplay();
}

function clickFive() {
    if (needsCleared == true) {
        currentInput = "";
        first = "";
        second = "";
        operator = "";
        needsCleared = false;
        }
    if (currentInput == "+" || currentInput == "-" || currentInput == "*" || currentInput == "/") {
        currentInput = "5"
    } else {
    currentInput += "5"
    }
    updateDisplay();
}

function clickSix() {
    if (needsCleared == true) {
        currentInput = "";
        first = "";
        second = "";
        operator = "";
        needsCleared = false;
        }
    if (currentInput == "+" || currentInput == "-" || currentInput == "*" || currentInput == "/") {
        currentInput = "6"
    } else {
    currentInput += "6"
    }
    updateDisplay();
}

function clickSeven() {
    if (needsCleared == true) {
        currentInput = "";
        first = "";
        second = "";
        operator = "";
        needsCleared = false;
        }
    if (currentInput == "+" || currentInput == "-" || currentInput == "*" || currentInput == "/") {
        currentInput = "7"
    } else {
    currentInput += "7"
    }
    updateDisplay();
}

function clickEight() {
    if (needsCleared == true) {
        currentInput = "";
        first = "";
        second = "";
        operator = "";
        needsCleared = false;
        }
    if (currentInput == "+" || currentInput == "-" || currentInput == "*" || currentInput == "/") {
        currentInput = "8"
    } else {
    currentInput += "8"
    }
    updateDisplay();
}

function clickNine() {
    if (needsCleared == true) {
        currentInput = "";
        first = "";
        second = "";
        operator = "";
        needsCleared = false;
        }
    if (currentInput == "+" || currentInput == "-" || currentInput == "*" || currentInput == "/") {
        currentInput = "9"
    } else {
    currentInput += "9"
    }
    updateDisplay();
}

function clickZero() {
    if (needsCleared == true) {
        currentInput = "";
        first = "";
        second = "";
        operator = "";
        needsCleared = false;
        }
    if (currentInput == "+" || currentInput == "-" || currentInput == "*" || currentInput == "/") {
        currentInput = "0"
    } else {
    currentInput += "0"
    }
    updateDisplay();
}

function clickDecimal() {
    if (needsCleared == true) {
        currentInput = "";
        first = "";
        second = "";
        operator = "";
        needsCleared = false;
        }
    if (currentInput.includes(".")) {

    }
    else if (currentInput == "+" || currentInput == "-" || currentInput == "*" || currentInput == "/") {
        currentInput = "0."
    } else {
    currentInput += "."
    }
    updateDisplay();
    console.log(currentInput);
}


function clickClear() {
    currentInput = "";
    first = "";
    second = "";
    operator = "";
    updateDisplay();
    needsCleared = false;
}










        // 1. make it so if you type a number after getting result, it clears
        // 2. make it work so that if you say 2 * 4 * 2, the second * would act like an equal sign, get the result, and then
        // be ready to keep doing math
        // Check 3. make it so only 1 decimal can be put in at a time
        // 4. maybe make it so the operator is highlighted instead of shown
        // 5. add button pressing affect 
        // Check 6. make it so pressing the operator multiple times in a row has no affect like 8 + + 8 = 16, but currently its NaN

