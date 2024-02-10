// 1. Start
// 2. Retrieve the input element with ID 'name-input' and store it in inName
// 3. Retrieve the span element with ID 'name-output' and store it in outName

// 4. Attach an input event listener to inName
//     4.1 When there is input in inName, do Steps 4.2 to 4.4
//     4.2 Retrieve the current value from the input event's target and store it in inValue
//     4.3 If inValue is not empty, set the text content of outName to inValue
//     4.4 If inValue is empty, set the text content of outName to 'Anonymous'

// 5. End

// {/* <input type="text" id="validation-input" data-length="6" placeholder="Please enter 6 symbols"/> */}
// const validationInput = document.getElementById('validation-input');

//   validationInput.addEventListener('blur', function() {
//     // Get the expected length from the data-length attribute that is 6
//     const expectedLength = parseInt(validationInput.getAttribute('data-length'),10);
//     // Get the actual length of the input value
//     const actualLength = validationInput.value.length;

//     // Check if the actual length matches the expected length
//     if (actualLength === expectedLength) {
//       // If it matches, add the 'valid' class and remove the 'invalid' class
//       validationInput.classList.remove('invalid');
//       validationInput.classList.add('valid');
//     } else {
//       // If it doesn't match, add the 'invalid' class and remove the 'valid' class
//       validationInput.classList.remove('valid');
//       validationInput.classList.add('invalid');
//     }
//   });
