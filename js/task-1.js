const categoriesList = document.querySelector('#categories');
const items = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);
items.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const liElements = item.querySelectorAll('ul li');

  console.log(`Category: ${title}`);
  console.log(`Elements: ${liElements.length}`);
});
