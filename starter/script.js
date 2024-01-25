'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// Types of API:
// - DOM API; Geolocation API; Own class API
// https://github.com/public-apis/public-apis -- Public API

// 1st: Using XMLHttpRequest - AJAX CALL

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText); //Convert to JSON
    console.log(data);
    const html = `<article class="country">
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
  });
};
// Made card for more country
getCountryData('macedonia');
getCountryData('serbia');
