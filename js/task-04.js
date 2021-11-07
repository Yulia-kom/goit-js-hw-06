const btnInc = document.querySelector('[data-action="increment"]');
const btnDec = document.querySelector('[data-action="decrement"]');
const span = document.querySelector("#value");

let counterValue = 0;

const increment = () => {
    counterValue += 1;
    span.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    span.textContent = counterValue;
};

btnInc.addEventListener('click', increment);
btnDec.addEventListener('click', decrement);

