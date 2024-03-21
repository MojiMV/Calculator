let array = [];
let lastClickedId = "";
const display = document.querySelector(".display");

function add(a, b){
    return a + b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function subtract(a, b){
    return a - b;
}

function operate(arr){
    let result;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            result = arr[i];
            break;
        }
    }

    for (let i = 0; i < arr.length - 1; ++i) { // Loop through the array, stopping at the second last element
        if (arr[i] === "add" && typeof arr[i + 1] === 'number') {
            result = add(result, arr[i + 1]);
        } else if (arr[i] === "subtract" && typeof arr[i + 1] === 'number') {
            result = subtract(result, arr[i + 1]); 
        } else if (arr[i] === "divide" && typeof arr[i + 1] === 'number') {
            result = divide(result, arr[i + 1]); 
        } else if (arr[i] === "multiply" && typeof arr[i + 1] === 'number') {
            result = multiply(result, arr[i + 1]); 
        }
    }

    array = [];
    display.textContent = result;
}

document.addEventListener("click", e =>{
    let target = e.target.id;
    
    switch(target){
        case "zero0":
        case "one1":
        case "two2":
        case "three3":
        case "four4":
        case "five5":
        case "six6":
        case "seven7":
        case "eight8":
        case "nine9":
            if (lastClickedId === "equal"){
                display.textContent = "";
            }
            display.textContent += target[target.length - 1];
            lastClickedId = target;
            break;
        case "add":
            array.push(+(display.textContent));
            array.push("add");
            display.textContent = "";
            break;
        case "multiply":
            array.push(+(display.textContent));
            array.push("multiply");
            display.textContent = "";
            break;
        case "divide":
            array.push(+(display.textContent));
            array.push("divide");
            display.textContent = "";
            break;
        case "subtract":
            array.push(+(display.textContent));
            array.push("subtract");
            display.textContent = "";
            break;
        case "equal":
            lastClickedId = target;
            array.push(+(display.textContent));
            display.textContent = "";
            operate(array);
            break;
        case "mc":
            display.textContent = "";
            break;
    }
    
})