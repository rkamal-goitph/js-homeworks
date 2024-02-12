const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// 1. Start
// 2. Retrieve the <ul> element by its ID "ingredients" and store it in emptyUL
const emptyUL = document.getElementById('ingredients');
console.log(emptyUL);

// 3. For each ingredient in the ingredients array, do Steps 4-7

ingredients.forEach(ingredient => {
  console.log(ingredient);
  const liofEmptyUL = document.createElement('li');
  liofEmptyUL.textContent = ingredient;
  liofEmptyUL.classList.add('item');
  console.log(liofEmptyUL);
  emptyUL.appendChild(liofEmptyUL);
});

// 4.    Create a new <li> element and store it in liofEmptyUL
// 5.    Set the text content of liofEmptyUL to the current ingredient
// 6.    Add the class "item" to liofEmptyUL
// 7.    Append liofEmptyUL to emptyUL as a child element
// 8. End For
// 9. End

// Get the <ul> element by its id and add its items to LI

//   ingredients.forEach(ingredient => {

// });
