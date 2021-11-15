// const input = document.getElementById("font-size-control");
// const span = document.getElementById("text");

// span.style.fontSize = input.value + 'px';

// input.addEventListener("input", (event) => {
//     span.style.fontSize = event.currentTarget.value + 'px';
// });


//второй вариант

const inputEl = document.getElementById('font-size-control');
const spanEl = document.getElementById('text');

inputEl.addEventListener("input", onRangeInput);


function onRangeInput() {

    spanEl.style.fontSize = `${inputEl.value + 'px'}`;
};