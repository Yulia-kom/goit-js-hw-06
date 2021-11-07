const navItemEl = document.querySelectorAll("li.item");
console.log(`Number of categories: ${navItemEl.length}`);

const navUlEl = Array.from(document.querySelector('ul#categories').children);
for (let elem of navUlEl) {

    let category = elem.firstElementChild.textContent;
    console.log(`Category: ${category}`);

    let quantityElem = elem.lastElementChild.children.length;
    console.log(`Elements: ${quantityElem}`);
};

