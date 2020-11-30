const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstNum = parseInt(document.getElementById('first-num').value);
    const secondNum = parseInt(document.getElementById('second-num').value);

    const operators = document.querySelectorAll('input[name="operators"]');
    let selectedValue;
    for (let operator of operators) {
        if (operator.checked) {
            selectedValue = operator.value;
            break;
        }
    }
    const result = (a, b, operator) => {
        if (operator = '+') {
            return a + b;
        } else if (operator = '-') {
            return a - b;
        } else if (operator = '*') {
            return a * b;
        } else if (operator = '/') {
            return a / b;
        }
    }

    console.log(result);

    console.log(firstNum, secondNum);
})