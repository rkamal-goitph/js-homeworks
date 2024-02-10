// 1. Import necessary modules (axios for HTTP requests, Notiflix for notifications, SimpleLightbox for image lightbox functionality)

// 2. Select necessary DOM elements (gallery for displaying images, input for search query, search form)

// 3. Instantiate SimpleLightbox on elements with class 'lightbox' and configure options

// 4. Initialize variables for tracking total hits and whether the end of the gallery has been reached

// 5. Define function renderGallery to display images
//    5.1 Create markup for each image using properties from the Pixabay API response (webformatURL, largeImageURL, tags, likes, views, comments, downloads)
//    5.2 Insert the markup into the gallery element
//    5.3 Check if the end of the search results has been reached and notify the user if so
//    5.4 Refresh the lightbox to include newly added images

// 6. Define async function handleSubmit to handle form submission
//    6.1 Prevent default form submission behavior
//    6.2 Set the search query in the options object to the trimmed value of the search input
//    6.3 Check if the search query is empty and return if true
//    6.4 Reset the gallery content, reachedEnd flag, and set the page in options to 1
//    6.5 Fetch images from the Pixabay API using axios with the configured options
//    6.6 Update totalHits with the total hits from the response
//    6.7 Display success notification with the number of found images or failure notification if no images are found
//    6.8 Call renderGallery with the hits from the response
//    6.9 Clear the search input value

// 7. Attach the handleSubmit function to the search form's submit event

// 8. Define async function loadMore to fetch and render the next page of images
//    8.1 Increment the page number in options
//    8.2 Fetch images from the Pixabay API using axios with the updated options
//    8.3 Call renderGallery with the hits from the response

// 9. Define function handleScroll to load more images when the user scrolls to the bottom of the page
//    9.1 Check if the user has scrolled to the bottom of the page
//    9.2 Call loadMore if the bottom is reached

// 10. Attach the handleScroll function to the window's scroll event

// import axios from 'axios';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import { BASE_URL, options } from './pixabay-api.js';

// ///////////////////////////////////////////////////////////////

// // DOM LINKS
// const galleryEl = document.querySelector('.gallery');
// const searchInputEl = document.querySelector('input[name="searchQuery"');
// const searchFormEl = document.getElementById('search-form');

// ///////////////////////////////////////////////////////////////

// // instantiate simplelightbox
// const lightbox = new SimpleLightbox('.lightbox', {
//   captionsData: 'alt',
//   captionDelay: 250,
// });

// ///////////////////////////////////////////////////////////////
// let totalHits = 0;
// let reachedEnd = false;

// function renderGallery(hits) {
//   const markup = hits
//     .map(
//       ({
//         webformatURL,
//         largeImageURL,
//         tags,
//         likes,
//         views,
//         comments,
//         downloads,
//       }) => {
//         return `
//               <a href="${largeImageURL}" class="lightbox">
//                   <div class="photo-card">
//                       <img src="${webformatURL}" alt="${tags}" loading="lazy" />
//                       <div class="info">
//                           <p class="info-item">
//                               <b><i class="fa fa-thumbs-up"></i></b>
//                               ${likes.toLocaleString()}
//                           </p>
//                           <p class="info-item">
//                               <b><i class="fa fa-eye"></i></b>
//                               ${views.toLocaleString()}
//                           </p>
//                           <p class="info-item">
//                               <b><i class="fa fa-comment"></i></b>
//                               ${comments.toLocaleString()}
//                           </p>
//                           <p class="info-item">
//                               <b><i class="fa fa-download"></i></b>
//                               ${downloads.toLocaleString()}
//                           </p>
//                       </div>
//                   </div>
//               </a>
//               `;
//       }
//     )
//     .join('');

//   galleryEl.insertAdjacentHTML('beforeend', markup);

//   //   If the user has reached the end of the collection
//   if (options.params.page * options.params.per_page >= totalHits) {
//     if (!reachedEnd) {
//       Notify.info("We're sorry, but you've reached the end of search results.");
//       reachedEnd = true;
//     }
//   }
//   lightbox.refresh();
// }

// ///////////////////////////////////////////////////////////////

// async function handleSubmit(e) {
//   e.preventDefault();
//   options.params.q = searchInputEl.value.trim();
//   if (options.params.q === '') {
//     return;
//   }
//   options.params.page = 1;
//   galleryEl.innerHTML = '';
//   reachedEnd = false;

//   try {
//     const response = await axios.get(BASE_URL, options);
//     totalHits = response.data.totalHits;

//     const { hits } = response.data;
//     console.log(hits);

//     if (hits.length === 0) {
//       Notify.failure(
//         'Sorry, there are no images matching your search query. Please try again.'
//       );
//     } else {
//       Notify.success(`Hooray! We found ${totalHits} images.`);
//       renderGallery(hits);
//     }
//     searchInputEl.value = '';
//   } catch (err) {
//     Notify.failure(err);
//   }
// }

// searchFormEl.addEventListener('submit', handleSubmit);

// ///////////////////////////////////////////////////////////////

// async function loadMore() {
//   options.params.page += 1;
//   try {
//     const response = await axios.get(BASE_URL, options);
//     const hits = response.data.hits;
//     renderGallery(hits);
//   } catch (err) {
//     Notify.failure(err);
//   }
// }

// function handleScroll() {
//   const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

//   if (scrollTop + clientHeight >= scrollHeight) {
//     loadMore();
//   }
// }

// window.addEventListener('scroll', handleScroll);
