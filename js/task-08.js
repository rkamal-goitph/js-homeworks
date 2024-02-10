// 1. Start
// 2. Select the form element with class 'login-form' and store it in variable loginForm

// 3. Attach a 'submit' event listener to loginForm
//     3.1 On form submission, perform the following steps:
//         a. Prevent the form's default submission behavior to stop page reload
//         b. Retrieve the email input field within the form using the form's elements property and store it in variable emailInput
//         c. Retrieve the password input field within the form using the form's elements property and store it in variable passwordInput

//         d. Check if either emailInput's value is empty or passwordInput's value is empty after trimming white spaces
//             d.1 If true (any field is empty), show an alert message indicating that all fields must be filled in
//             d.2 If false (no fields are empty), proceed to the next steps

//         e. Create an object named formData where:
//             - The key 'email' holds the value of emailInput
//             - The key 'password' holds the value of passwordInput

//         f. Log the formData object to the console to display the entered data

//         g. Reset the loginForm fields to clear the form inputs

// 4. End

// const loginForm = document.querySelector('.login-form');

//   loginForm.addEventListener('submit', function(event) {
//     // Prevent the default form submission behavior
//     event.preventDefault();

//     // Get form elements using the elements property of the form
//     const emailInput = loginForm.elements.email;
//     const passwordInput = loginForm.elements.password;

//     // Check if any of the fields are empty
//     if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
//       alert('All fields must be filled in.');
//     } else {
//       // Create an object with field names as properties and field values as values
//       const formData = {
//         email: emailInput.value,
//         password: passwordInput.value
//       };

//       // Display the object with entered data in the console
//       console.log(formData);

//       // Clear the form fields once submitted
//       loginForm.reset();
//     }
//   });
