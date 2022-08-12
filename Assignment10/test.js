const getResult = () => {
    const num1 = 54.95;
    const num2 = .1;
    const result = parseFloat(prompt(`What is ${num1} * ${num2}?`));
    if (result != (num1 * num2).toFixed(3)) {
        alert("Incorrect");
    }
    else  {
        alert("Correct!");
    }
};

window.onload = getResult;