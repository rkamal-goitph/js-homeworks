const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// 1. Start
// 2. Retrieve the element with class "gallery" and store it in galleryList
// 3. Initialize an empty string galleryMarkup
// 4. For each image in the images array, do Steps 5-6
// 5.    Generate a string of HTML markup for the current image, formatted as:
//          `<li><img src="{image.url}" alt="{image.alt}" class="gallery-image"></li>`
//       and append this string to galleryMarkup
// 6. End For
// 7. Insert galleryMarkup into galleryList at the position "beforeend" (which adds the markup as the last child of galleryList)
// 8. End

// const galleryList = document.querySelector(".gallery");

// const galleryMarkup = images
//   .map(
//     image =>
//       `<li><img src="${image.url}" alt="${image.alt}" class="gallery-image"></li>`
//   )
//   .join("");

// galleryList.insertAdjacentHTML("beforeend", galleryMarkup);
