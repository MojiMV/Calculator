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

document.addEventListener("keydown", e => {
    let key = e.key;

    switch(key){
        case "1":
            document.querySelector("#one1").click();
            break;
        case "2":
            document.querySelector("#two2").click();
            break;
        case "3":
            document.querySelector("#three3").click();
            break;
        case "4":
            document.querySelector("#four4").click();
            break;
        case "5":
            document.querySelector("#five5").click();
            break;
        case "6":
            document.querySelector("#six6").click();
            break;
        case "7":
            document.querySelector("#seven7").click();
            break;
        case "8":
            document.querySelector("#eight8").click();
            break;
        case "9":
            document.querySelector("#nine9").click();
            break;
        case "+":
            document.querySelector("#add").click();
            break;
        case "-":
            document.querySelector("#subtract").click();
            break;
        case "*":
            document.querySelector("#multiply").click();
            break;
        case "/":
            document.querySelector("#divide").click();
            break;
        case ".":
            document.querySelector("#dot").click();
            break;
        case "Enter":
            document.querySelector("#equal").click();
            break;
        case "Escape":
            document.querySelector("#off").click();
            break;
        case "Delete":
            document.querySelector("#mc").click();
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
            if (validDot()){//
                if (display.textContent[0] === "+" || 
                    display.textContent[0] === "-" || 
                    display.textContent[0] === "/" || 
                    display.textContent[0] === "*") {
                    display.textContent = "";
                }
                display.textContent += target[target.length - 1];
                lastClickedId = target;
            };
            
            break;
        case "add":
            array.push(+(display.textContent));
            array.push(target);
            display.textContent = "+";
            break;
        case "multiply":
            array.push(+(display.textContent));
            array.push(target);
            display.textContent = "*";
            break;
        case "divide":
            array.push(+(display.textContent));
            array.push(target);
            display.textContent = "/";
            break;
        case "subtract":
            array.push(+(display.textContent));
            array.push(target);
            display.textContent = "-";
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

