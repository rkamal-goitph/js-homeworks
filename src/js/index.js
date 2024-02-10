// 1. Import necessary modules for fetching data, styling select elements, and displaying notifications

// 2. Select DOM elements for the breed select, cat information display, loader, and error message display

// 3. Define function chooseBreed
//     3.1 Call fetchBreeds to get data about cat breeds
//     3.2 On successful fetch, hide the loader and generate options markup for each breed
//     3.3 Insert the options markup into the breedSelectEl
//     3.4 Initialize SlimSelect on the breedSelectEl for custom styling
//     3.5 Show the breedSelectEl by removing the 'is-hidden' class
//     3.6 Catch any errors and call onError function

// 4. Call chooseBreed to populate breed options on page load

// 5. Define function createMarkup to handle breed selection changes
//     5.1 Show loader and hide breedSelectEl and catInfoEl during data loading
//     5.2 Get the selected breed ID from the event target
//     5.3 Call fetchCatByBreed with the selected breed ID
//     5.4 On successful fetch, hide the loader and show breedSelectEl
//     5.5 Extract cat image URL and breed information from the fetched data
//     5.6 Generate HTML markup with the cat image and breed information
//     5.7 Insert the generated markup into catInfoEl and show catInfoEl
//     5.8 Catch any errors and call onError function

// 6. Add an event listener to breedSelectEl to handle changes and call createMarkup

// 7. Define function onError to handle errors
//     7.1 Show breedSelectEl and hide the loader
//     7.2 Display an error notification using Notify.failure with a message advising to reload the page or select another breed

// import { fetchBreeds, fetchCatByBreed } from './cat-api';
// import SlimSelect from 'slim-select';
// import 'slim-select/dist/slimselect.css';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// ////////////////////////////////////////////////////////////

// const breedSelectEl = document.querySelector('.breed-select');
// const catInfoEl = document.querySelector('.cat-info');
// const loaderEl = document.querySelector('.loader');
// const errorEl = document.querySelector('.error');

// ////////////////////////////////////////////////////////////

// // for creating the options
// function chooseBreed(data) {
//   fetchBreeds(data)
//     .then(data => {
//       //   console.log(data);
//       loaderEl.classList.replace('loader', 'is-hidden');

//       let optionsMarkup = data.map(({ name, id }) => {
//         return `<option value ='${id}'>${name}</option>`;
//       });

//       breedSelectEl.insertAdjacentHTML('beforeend', optionsMarkup);

//       // to define css style from slim-select
//       new SlimSelect({
//         select: breedSelectEl,
//       });
//       breedSelectEl.classList.remove('is-hidden'); // Show select element after options are added

//     })

//     .catch(onError);
// }

// chooseBreed();

// ////////////////////////////////////////////////////////////

// function createMarkup(event) {
//   // Show loader while loading
//   loaderEl.classList.replace('is-hidden', 'loader');
//   // Hide select element and cat info markup while loading
//   breedSelectEl.classList.add('is-hidden');
//   catInfoEl.classList.add('is-hidden');

//   const breedId = event.target.value;
//   //   get the option value using event.target.value
//   //   console.log(event.target);
//   //   console.log(event.target.value);

//   fetchCatByBreed(breedId)
//     .then(data => {
//       loaderEl.classList.replace('loader', 'is-hidden');
//       breedSelectEl.classList.remove('is-hidden');

//       const { url, breeds } = data[0];
//       const { name, description, temperament } = breeds[0];

//       catInfoEl.innerHTML = `
//       <img src="${url}" alt="${name}" width="400"/>
//       <div class="box">
//         <h2>${name}</h2>
//         <p>${description}</p>
//         <p><strong>Temperament:</strong> ${temperament}</p>
//       </div>
//       `;
//       catInfoEl.classList.remove('is-hidden');
//     })
//     .catch(onError);
// }

// breedSelectEl.addEventListener('change', createMarkup);

// ////////////////////////////////////////////////////////////

// function onError() {
//   breedSelectEl.classList.remove('is-hidden');
//   errorEl.classList.replace('loader', 'is-hidden');

//    Notify.failure(
//     'Oops! Something went wrong! Try reloading the page or select another cat breed!'
//   );
// }
