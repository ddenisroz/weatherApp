import { ObjectsHTML } from "./htmlobjects.js";
import { renderfunc } from "./render.js";
import { storage } from "./storage.js";
import { formatTime } from "./additional_functions.js";
import { fill_forecast_boxes } from "./render.js";

const { inputForm, inputText,} = ObjectsHTML;
const { renderNOW, renderDETAILS} = renderfunc;

(function firstlaunch() {
    const url = storage.getLastSearchedCity();

    recievecitydata(url);
}());

function initializeCityUrlAndTakeData(event) {
    event.preventDefault();

    const cityName = inputText.value;

    if (/[0-9]/.test(cityName)) {
        inputText.value = '';
        return alert("Наименование не должно содержать числа")
    }
    recievecitydata(create_url_request(cityName));
}

//Запрос с api для первой вкладки

function create_url_request(cityName) {
    const serverUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const apiKey = '795fde4879f1b290f7a0cfcf9cb51104';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
    
    storage.saveLastSearchedCity(url);
    return url
}

async function recievecitydata(url) {
    try {
        const forecast_url = url.replace('/weather', '/forecast')
        const requested_city_data = await sendrequest(url);
        const requested_forecast_data = await sendrequest(forecast_url);
        console.log(requested_city_data);
        console.log(requested_forecast_data);
        const cityDataObj = await fill_tabs_data(requested_city_data);
        const forecast_city_data_obj = await fill_forecast_tab_data(requested_forecast_data);


        renderNOW(cityDataObj);
        renderDETAILS(cityDataObj);


        // получение данных с api с преобразованием в объект через .json()

        async function sendrequest(link) {
            let request = await fetch(link);
            if (!request.ok) {
                throw await (request.json())
            }
            else {
                let jsonrequest = await request.json();
                return await jsonrequest
            }
        }
    } catch (err) {
        console.log('Error', err.cod, err.message);
    }
}

// запись полученных данных в объект для рендера

async function fill_tabs_data(city_obj) {
    const city_data = {};

//сбор информации для вкладки NOW & Details

    const cityName = city_obj.name;
    const cityTemperature = city_obj.main.temp.toFixed();
    const weatherConditionsImgSrc = city_obj.weather[0].icon;
    const feelsTemperature = city_obj.main.feels_like.toFixed();
    const weatherDescription = city_obj.weather[0].main;
    const sunrise = formatTime(city_obj.sys.sunrise, city_obj.timezone);
    const sunset = formatTime(city_obj.sys.sunset, city_obj.timezone);


    city_data.cityName = cityName;
    city_data.cityTemperature = cityTemperature;
    city_data.weatherConditionsImgSrc = weatherConditionsImgSrc;
    city_data.feelsTemperature = feelsTemperature;
    city_data.weatherDescription = weatherDescription;
    city_data.sunrise = sunrise;
    city_data.sunset = sunset;

    return city_data
}

async function fill_forecast_tab_data (city_obj) {
    fill_forecast_boxes(city_obj)
}

inputForm.addEventListener('submit', initializeCityUrlAndTakeData)

export {initializeCityUrlAndTakeData}
