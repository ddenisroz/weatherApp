import { ObjectsHTML } from "./htmlobjects.js";
import { forecast_format_Time } from "./additional_functions.js";

const {details_city, details_deg, details_feel, details_weather_description, sunrise, sunset, inputText, now_deg, now_city, now_weatherpic, content_forecast} = ObjectsHTML;

function renderNOW(obj) {
    now_deg.textContent = `${obj.cityTemperature} °`;
    now_weatherpic.src = `http://openweathermap.org/img/wn/${obj.weatherConditionsImgSrc}@4x.png`;
    now_city.textContent = obj.cityName;
    inputText.value = '';
}

function renderDETAILS(obj) {
    details_city.textContent = obj.cityName
    details_deg.textContent = `${obj.cityTemperature} °`;
    details_feel.textContent = `${obj.feelsTemperature} °`;
    details_weather_description.textContent = obj.weatherDescription;
    sunrise.textContent = obj.sunrise;
    sunset.textContent = obj.sunset;
}


export function fill_forecast_boxes (city_obj) {
    const forecastList = city_obj.list;

    document.querySelector('.forecast__city').textContent = city_obj.city.name

    //чистка контейнеров forecast
    const clearboxex = document.querySelectorAll('.forecast__short-info')
    clearboxex.forEach((elem)=>elem.remove());

    for (let i = 0; i < 5; i++) {
        forecast_create_boxes(forecastList, i)
    }
}

function forecast_create_boxes(forecastList, index) {
    const forecastDate = forecast_format_Time(forecastList[index].dt_txt)[0];
    const forecastTime = forecast_format_Time(forecastList[index].dt_txt)[1];
    const forecastTemp = `Temperature: ${(forecastList[index].main.temp).toFixed()}°`;
    const forecastFeelsLike = `Feels like: ${(forecastList[index].main.feels_like).toFixed()}°`;
    const forecastWeatherCondition = forecastList[index].weather[0].main;
    const forecastWeatherConditionImg = `http://openweathermap.org/img/wn/${forecastList[index].weather[0].icon}@4x.png`; 

    const forecast_box = document.createElement('div');
    forecast_box.classList.add('forecast__short-info');
    content_forecast.appendChild(forecast_box);
    

    const forecast_up = document.createElement('div');
    forecast_up.classList.add('forecast_up');
    forecast_box.appendChild(forecast_up);

    const forecast_low = document.createElement('div');
    forecast_low.classList.add('forecast_low');
    forecast_box.appendChild(forecast_low);

    const forecast_day = document.createElement('p');
    forecast_day.classList.add('forecast_day');
    forecast_up.appendChild(forecast_day);
    
    const forecast_time = document.createElement('p');
    forecast_time.classList.add('forecast_time');
    forecast_up.appendChild(forecast_time);
    
    const forecast_low_info_1 = document.createElement('div');
    forecast_low_info_1.classList.add('forecast_info');
    forecast_low.appendChild(forecast_low_info_1);

    const forecast_low_info_2 = document.createElement('div');
    forecast_low_info_2.classList.add('forecast_info');
    forecast_low.appendChild(forecast_low_info_2);

    const forecast_temp = document.createElement('div');
    forecast_temp.classList.add('forecast_temp');
    forecast_low_info_1.appendChild(forecast_temp);

    const forecast_feels_like = document.createElement('div');
    forecast_feels_like.classList.add('forecast_feel');
    forecast_low_info_1.appendChild(forecast_feels_like);

    const forecast_weather = document.createElement('div');
    forecast_weather.classList.add('forecast_weather');
    forecast_low_info_2.appendChild(forecast_weather);

    const forecast_item_weather = document.createElement('div');
    forecast_item_weather.classList.add('forecast_item-weather');
    forecast_low_info_2.appendChild(forecast_item_weather);
    

    forecast_day.textContent = forecastDate;
    forecast_time.textContent = forecastTime;
    forecast_temp.textContent = forecastTemp;
    forecast_feels_like.textContent = forecastFeelsLike;
    forecast_weather.textContent = forecastWeatherCondition;
    forecast_item_weather.innerHTML = `<img src=${forecastWeatherConditionImg} alt="weather-icon" class="forecast_weather_icon"></img>`;
}

export const renderfunc = {renderNOW, renderDETAILS}
