// 1. Start
// 2. Import the Vimeo Player API
// 3. Import the throttle function from the lodash library

// 4. Retrieve the iframe with the ID 'vimeo-player' and store it in iframe
// 5. Instantiate a new Vimeo Player with the iframe

// 6. Define a function handleThrottle that takes data as a parameter
//     6.1 Extract the current playback time in seconds from data
//     6.2 Log the current playback time to the console
//     6.3 Save the current playback time in local storage under the key 'videoplayer-current-time'

// 7. Add an event listener to the player for the 'timeupdate' event
//     7.1 Use the throttle function to limit calls to handleThrottle to once every 1000 milliseconds

// 8. Attempt to set the player's current playback time to the value retrieved from local storage under 'videoplayer-current-time'
//     8.1 Note: The actual setting of the time is assumed to be handled internally by the player

// 9. End

// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

// const iframe = document.querySelector('#vimeo-player');
// const player = new Player(iframe);

// const handleThrottle = function (data) {
//   const timeInSeconds = data.seconds;
//   console.log(timeInSeconds);
//   localStorage.setItem('videoplayer-current-time', timeInSeconds);
// };

// player.on('timeupdate', throttle(handleThrottle, 1000));

// player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

// .then(function (seconds) {
//   // seconds = the actual time that the player seeked to
// })
// .catch(function (error) {
//   switch (error.name) {
//     case 'RangeError':
//       // the time was less than 0 or greater than the video’s duration
//       break;

//     default:
//       // some other error occurred
//       break;
//   }
// });
