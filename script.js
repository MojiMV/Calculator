let array = [];
let lastClickedId = "";
let offClicked = false;

const display = document.querySelector(".display");
display.textContent = "0";
const buttons = document.querySelectorAll(".buttons-container button")

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

function handleOffClick(off){
    if (off == false){
        offClicked = !offClicked;
        display.textContent = "";
        array = [];
        display.classList.toggle("active");
        buttons.forEach(button => {
            button.disabled = true;
        });
        const offBut = document.querySelector("#off");
        offBut.disabled = false;
    } else {
        offClicked = !offClicked;
        display.classList.toggle("active");
        display.textContent = "0";
        buttons.forEach(button => {
            button.disabled = false;
        })
    }
}

function validDot(){
    let dotArr = display.textContent.split(".");
    return !(Boolean(dotArr[1]));
}

    document.addEventListener("keypress", e => {
        let key = e.key;

        switch(key){
            case "1":
                const num1 = document.querySelector("#one1");
                num1.click();
                break;
        }
    });



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
            if (lastClickedId === "equal" || (display.textContent.length === 1 && display.textContent === "0")){
                display.textContent = "";
            }; 
            if (validDot()){
                display.textContent += target[target.length - 1];
                lastClickedId = target;
            };
            
            break;
        case "add":
        case "multiply":
        case "divide":
        case "subtract":
            array.push(+(display.textContent));
            array.push(target);
            display.textContent = "";
            break;
        case "equal":
            lastClickedId = target;
            array.push(+(display.textContent));
            display.textContent = "";
            operate(array);
            break;
        case "mc":
            display.textContent = "0";
            array = [];
            break;
        case "off":
            handleOffClick(offClicked);
            break;
        case "dot":
            if (!(display.textContent.includes("."))){
                display.textContent += ".";
            }
            break;

    }
    
});

