// 1. Start
// 2. Define a function getRandomHexColor
//     2.1 Generate a random integer between 0 and 16777215
//     2.2 Convert this integer to a hexadecimal string
//     2.3 Ensure the string is at least 6 characters long, padding with leading zeros if necessary
//     2.4 Return the hexadecimal string prefixed with "#"

// 3. Select the button with class 'change-color' and store it in changeColorButton
// 4. Select the span with class 'color' and store it in colorSpan

// 5. Attach a 'click' event listener to changeColorButton
//     5.1 When the button is clicked, perform the following steps:
//         a. Call getRandomHexColor function and store the returned value in randomColor
//         b. Set the background color of the document's body to randomColor
//         c. Update the text content of colorSpan with the value of randomColor

// 6. End

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// // Getting class of <button type="button" class="change-color">Change color</button>
//   const changeColorButton = document.querySelector('.change-color');

// //Getting class of <p>Background color: <span class="color">-</span></p>
//   const colorSpan = document.querySelector('.color');

//   changeColorButton.addEventListener('click', function() {
//     // Get a random hex color using the getRandomHexColor function
//     const randomColor = getRandomHexColor();

//     document.body.style.backgroundColor = randomColor;
//     colorSpan.textContent = randomColor;
//   });
