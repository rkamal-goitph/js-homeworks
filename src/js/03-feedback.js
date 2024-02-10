// 1. Start
// 2. Import the throttle function from lodash library

// 3. Select the feedback form element and store it in variable formEl
// 4. Define a key for accessing local storage

// 5. Define function loadForm to load saved form data
//     5.1 Try to parse saved form data from local storage
//     5.2 If data exists, populate the form fields with this data
//     5.3 Catch and log any errors during data loading

// 6. Define function onSaveFormInput to save form input to local storage
//     6.1 Update the data object with the form input name and value
//     6.2 Save the updated data object to local storage

// 7. Define function onFormSubmit to handle form submission
//     7.1 Prevent default submission action
//     7.2 Validate form data, alerting if necessary
//     7.3 Log form data, reset the form, and remove saved data from local storage

// 8. Call loadForm to attempt to preload form data

// 9. Attach event listeners to the form
//     9.1 Add an input event listener, throttled, to save input data
//     9.2 Add a submit event listener to handle form submission

// 10. End

import _throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

let data = {};

loadForm();

formEl.addEventListener('input', _throttle(onSaveFormInput, 500));

formEl.addEventListener('submit', onFormSubmit);

function onSaveFormInput(event) {
  data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};

  data[event.target.name] = event.target.value;

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}

function onFormSubmit(event) {
  event.preventDefault();
  if (!event.target.email.value || !event.target.message.value) {
    alert('Enter all data');
    return;
  }

  event.target.reset();
  console.log(data);
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}

function loadForm() {
  try {
    let formLoad = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (!formLoad) {
      return;
    }

    data = formLoad;
    formEl.email.value = data.email || '';
    formEl.message.value = data.message || '';
  } catch (error) {
    console.error('Error.message ', error.message);
  }
}
