// 1. Start
// 2. Retrieve the range input element with ID 'font-size-control' and store it in fontSizeControl
// 3. Retrieve the span element with ID 'text' and store it in textSpan

// 4. Attach an input event listener to fontSizeControl
//     4.1 When there is input on fontSizeControl, do Steps 4.2 and 4.3
//     4.2 Get the current value of fontSizeControl and append 'px' to it, storing this in fontSize
//     4.3 Set the font size of textSpan to fontSize

// 5. End

// //<input id="font-size-control" type="range" min="16" max="96" />
// const fontSizeControl = document.getElementById('font-size-control');
// //<span id="text">Abracadabra!</span>
// const textSpan = document.getElementById('text');

//   fontSizeControl.addEventListener('input', function() {
//     // Get the value from the font-size-control input
//     const fontSize = fontSizeControl.value + 'px';

//     // adjust the font size of the text element when scrolling
//     textSpan.style.fontSize = fontSize;
//   });
