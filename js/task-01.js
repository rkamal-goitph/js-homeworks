// 1. Start
// 2. Get all elements with class 'item' inside the element with id 'categories' and store them in categoriesList

const categoriesList = document.querySelectorAll('#categories .item');
console.log(categoriesList);

// 3. Print to log: "Number of categories: " + length of categoriesList

console.log(`Number of categories: ${categoriesList.length}`);

// 4. For each category in categoriesList do Steps 5-9

categoriesList.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const numberOfElements = category.querySelectorAll('li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${numberOfElements}`);
});

// 5.     Find the first 'h2' element within the current category and get its text content, store this as categoryName
// 6.     Find all 'li' elements inside 'ul' within the current category and count them, store this count as numberOfElements
// 7.     Print to log: "Category: " + categoryName
// 8.     Print to log: "Elements: " + numberOfElements
// 9. End For
// 10. End

//     console.log("Category:", categoryName);
//     console.log("Elements:", numberOfElements);
// });
