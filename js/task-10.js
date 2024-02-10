// 1. Start
// 2. Define function getRandomHexColor
//     2.1 Generate a random number between 0 and 16777215
//     2.2 Convert this number to a hexadecimal string
//     2.3 Pad the string with zeros to ensure it is 6 characters long
//     2.4 Return the hexadecimal string prefixed with "#"

// 3. Select the button with attribute 'data-create' and store it in btnCreate
// 4. Select the button with attribute 'data-destroy' and store it in btnDestroy
// 5. Select the input element of type number and store it in inputElement
// 6. Select the div element with id 'boxes' and store it in divBoxes

// 7. Attach a click event listener to btnCreate to execute createBoxes function
// 8. Attach a click event listener to btnDestroy to execute destroyBoxes function

// 9. Define function createBoxes
//     9.1 Retrieve the value from inputElement and store it as amount
//     9.2 Initialize size to 30 (starting size for boxes)
//     9.3 For each number from 0 to amount-1, do steps 9.4 to 9.7
//         9.4 Create a new div element and store it in divBox
//         9.5 Set the width and height of divBox to size (increment size by 10 after each box)
//         9.6 Set the background color of divBox using getRandomHexColor function
//         9.7 Append divBox to divBoxes

// 10. Define function destroyBoxes
//     10.1 Clear the innerHTML of divBoxes to remove all child elements
//     10.2 Clear the value of inputElement

// 11. End

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// //Get attribute of <button type="button" data-create>Create</button>
//   const btnCreate = document.querySelector('[data-create]');
// //Get Attribute of <button type="button" data-destroy>Destroy</button>
//   const btnDestroy = document.querySelector('[data-destroy]');
// //Get the element <input type="number" min="1" max="100" step="1" />
//   const inputElement = document.querySelector('input');
// //Get the element DIV by id <div id="boxes"></div>
//   const divBoxes = document.getElementById('boxes');

//   btnCreate.addEventListener('click', createBoxes);
//   btnDestroy.addEventListener('click', destroyBoxes);
//   function createBoxes() {
//     const amount = inputElement.value;
//     // Clear previous boxes
//     // destroyBoxes();

//     // Create new boxes with background color and adding 10 px to previous
//     let size = 30;
//     for (let i = 0; i < amount; i++) {
//       const divBox = document.createElement('div');
//       divBox.style.width = `${size}px`;
//       divBox.style.height = `${size}px`;
//       divBox.style.backgroundColor = getRandomHexColor();
//       divBoxes.appendChild(divBox);
//       size += 10;
//     }
//   }

//   function destroyBoxes() {
//     // Clear the contents of div#boxes once you click destroy button
//     divBoxes.innerHTML = '';
//     inputElement.value = '';
//   }
