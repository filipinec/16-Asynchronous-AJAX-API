'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// Types of API:
// - DOM API; Geolocation API; Own class API
// https://github.com/public-apis/public-apis -- Public API

// 1st: Using XMLHttpRequest - AJAX CALL

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText); //Convert to JSON
//     console.log(data);
//     const html = `<article class="country">
//   <img class="country__img" src="${data.flags.png}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       data.population / 1000000
//     ).toFixed(2)}</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0]}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0]}</p>
//   </div>
// </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = '1';
//   });
// };
// // Made card for more country
// getCountryData('macedonia');

/////////////////////////////////////////////////////

// // Callback Hell

// const renderCountry = function (data, className = '') {
//   const html = `<article class="country ${className}">
//   <img class="country__img" src="${data.flags.png}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       data.population / 1000000
//     ).toFixed(2)}</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0]}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0]}</p>
//   </div>
// </article>`;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = '1';
// };

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText); //Convert to JSON
//     console.log(data);
//     //Render country
//     renderCountry(data); // Call from above

//     //Get neighbour countries
//     const neighbours = data.borders;

//     //If some country not have neighbour
//     if (!neighbours) return;

//     //forEach Method for looping trought array
//     neighbours.forEach(cur => {
//       //AJAX for all neighbours - search by country Code(Example: ALB)
//       const request2 = new XMLHttpRequest();
//       request2.open('GET', `https://restcountries.com/v3.1/alpha/${cur}`);
//       request2.send();
//       request2.addEventListener('load', function () {
//         const [data2] = JSON.parse(this.responseText); //Convert to JSON
//         console.log(data2);
//         //Render country
//         renderCountry(data2, 'neighbour'); // Call from above
//       });
//     });
//   });
// };
// // Made card for more country
// getCountryAndNeighbour('macedonia');

////////////////////////////////////////

//  Fetch API - Promise/Consume/Chaining
//  Same example like XML Request

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      data.population / 1000000
    ).toFixed(2)}</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0]}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0]}</p>
  </div>
</article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = '1';
};

const getCountryData = function (country) {
  //Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbours = data[0].borders;
      console.log(neighbours);
      if (!neighbours) return;
      //Neighbour country
      fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`).then(response2 => response2.json());
    }).then(data2 => data2.forEach(el => {
      rende
      
    }););
};

getCountryData('macedonia');
