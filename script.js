let buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = "#FFF8DC";
        button.style.color = "black";
        button.style.cursor = "pointer";
    });
});
buttons.forEach(button => {
    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = "";
        button.style.color = "";
    });
});

let ecran = document.querySelector('p');
ecran.textContent = 0;
let isFirstClick = true;
let isFirstOperande = true;
let a = '';
let b = '';
let op = '';

function operate(op, a, b) {
    console.log(op);
    console.log(a);
    console.log(b);
    let sum;
    if (op == 'add') {
        sum = add(a,b);
    } else if (op === 'subtract') {
        sum = subtract(a,b);
    } else if (op === 'multiply') {
        sum = multiply(a,b);
    } else if (op === 'divide') {
        sum = divide(a,b);
    } else {
        console.log('Error: Unsupported operation');
        return;
    }
    ecran.textContent = sum;
    a = sum;
    b = '';
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (isFirstClick) {
            ecran.textContent = '';
            isFirstClick = false;
        }
        if(button.value === 'clear') {
            ecran.textContent = 0;
            isFirstClick = true;
            isFirstOperande = true;
            a = '';
            b = '';
            op = '';
        } else {
        if(button.value === 'sum') {
            operate(op, parseFloat(a), parseFloat(b));
        } else {
            let operande = button.value == '+' ? 'add' : button.value == '-' ? 'subtract' : button.value == '*' ? 'multiply' : button.value == '/' ? 'divide' : '';
            if(operande !== '') {
                op = operande;
                a = ecran.textContent;
                isFirstOperande = false;
                ecran.textContent += button.value;
            } else {
                if(a == '') {
                    ecran.textContent += button.value;
                } else {
                    ecran.textContent += button.value;
                    b += button.value;    
                }
            }
        }
    }
    });
});


function add(a,b) {
    return a + b;
}
function subtract(a,b) {
    return a - b;
}
function multiply(a,b) {
    return a * b;
}
function divide(a,b) {
    return a / b;
}