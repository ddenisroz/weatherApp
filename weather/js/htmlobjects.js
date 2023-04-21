//Switch tabs
const tabs = document.querySelectorAll('.tabs');
const content = document.querySelectorAll('.content');


//search city input
const inputForm = document.querySelector('.inputForm');
const inputText = document.querySelector('.inputText');
const now_deg = document.querySelector('#now_deg');
const now_city = document.querySelector('#now_city');
const now_weatherpic = document.querySelector('.main-weather-icon');

const details_city = document.querySelector('.details_city')
const details_deg = document.querySelector('.details__temp-span');
const details_feel = document.querySelector('.details__feel-span');
const details_weather_description = document.querySelector('.details__weather-span');
const sunrise = document.querySelector('.details__sunrise-span');
const sunset = document.querySelector('.details__sunset-span');

const content_forecast = document.querySelector('.content-forecast')


//favorite button
const favoriteCities = document.querySelector('.list-cities');
const delCityBtn = document.querySelectorAll('.delete-city');
const likebutton = document.querySelector('.like')



export const ObjectsHTML = {details_city, details_deg, details_feel, details_weather_description, sunrise, sunset, content_forecast, tabs, content, inputForm, 
    inputText, now_deg, now_city, now_weatherpic, favoriteCities, delCityBtn, likebutton};