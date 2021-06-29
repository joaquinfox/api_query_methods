// Basic fetch
const h4El = document.querySelector('#user_name');
const imageEl = document.querySelector('img');
const locationSpan = document.querySelector('#user-location');

fetch(`https://randomuser.me/api/`)
  .then((response) => response.json())
  .then((response) => {
    const userData = response.results[0];
    const userName = userData.name;
    const userLocation = userData.location;
    const userPicture = userData.picture;
    h4El.append(`${userName.title} ${userName.first} ${userName.last}`);
    imageEl.src = userPicture.medium;
    locationSpan.append(`${userLocation.city}, ${userLocation.country}`);
  });
