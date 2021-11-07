const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const bodyPotatEl = document.createElement("li");
bodyPotatEl.classList.add("item");
bodyPotatEl.textContent = 'Potatoes';

const firstBodyEl = document.createElement("li");
firstBodyEl.classList.add("item");
firstBodyEl.textContent = 'Mushrooms';

const bodyGarlEl = document.createElement("li");
bodyGarlEl.classList.add("item");
bodyGarlEl.textContent = 'Garlic';

const bodyTomatEl = document.createElement("li");
bodyTomatEl.classList.add("item");
bodyTomatEl.textContent = 'Tomatos';

const bodyHerbEl = document.createElement("li");
bodyHerbEl.classList.add("item");
bodyHerbEl.textContent = 'Herbs';

const bodyCondEl = document.createElement("li");
bodyCondEl.classList.add("item");
bodyCondEl.textContent = 'Condiments';

const navEl = document.querySelector("ul#ingredients");

navEl.append(bodyPotatEl, firstBodyEl, bodyGarlEl, bodyTomatEl, bodyHerbEl, bodyCondEl);
