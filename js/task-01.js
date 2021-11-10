const navItemEl = document.querySelectorAll("li.item");
console.log(`Number of categories: ${navItemEl.length}`);

const categoriesList = document.querySelectorAll('#categories > li');

categoriesList.forEach(elem => {

    console.log(`Category: ${elem.firstElementChild.textContent}, Elements: ${elem.lastElementChild.children.length}`);

});
