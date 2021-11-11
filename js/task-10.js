const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const input = document.querySelector('[data-number]');
const boxes = document.getElementById('boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

create.addEventListener('click', event => {
  destroyBoxes();
  createBoxes(parseInt(input.value));
});

destroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const divs = [];

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.innerText = i;
    div.style.backgroundColor = getRandomHexColor();

    const size = 30 + 10 * i;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.lineHeight = `${size}px`;
    div.classList.add('box');

    divs.push(div);
  }

  boxes.append(...divs);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function createBoxesX(amount) {
  let html = "";

  for (let i = 0; i < amount; i++) {
    const size = 30 + 10 * i;
    html += `<div style="width: ${size}px; height: ${size}px; line-height: ${size}px; 
      background-color: ${getRandomHexColor()}" class="box">${i}</div>`
  }

  boxes.innerHTML = html;
}

