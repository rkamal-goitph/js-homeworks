// 1. Set BASE_URL to the Pixabay API endpoint

// 2. Set API_KEY to the provided API key for authentication

// 3. Define an object options containing parameters for API requests:
//     3.1 Set key to API_KEY for authentication
//     3.2 Initialize q (query) as an empty string to be filled with the search term
//     3.3 Set image_type to 'photo' to specify the type of images to fetch
//     3.4 Set orientation to 'horizontal' to specify the orientation of images
//     3.5 Enable safesearch to filter out inappropriate content
//     3.6 Initialize page to 1 to specify the starting page of the results
//     3.7 Set per_page to 40 to specify the number of results per page

// 4. Export BASE_URL and options for use in API requests

// export const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '41258265-293e4bea479457c1d7a454ddf';

// export const options = {
//   params: {
//     key: API_KEY,
//     q: '',
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     page: 1,
//     per_page: 40,
//   },
// };
