import { ObjectsHTML } from "./htmlobjects.js"
import { initializeCityUrlAndTakeData } from "./main.js"
import { storage } from "./storage.js";

const { saveFavoriteCities, getFavoriteCities,} = storage;
const { favoriteCities, inputText, likebutton } = ObjectsHTML;

let list = [];
renderFavorite();


function clickFavoriteButton(event) {
    event.preventDefault();

    const cityName = now_city.textContent;
    addcity(cityName);
    renderFavorite();
}

function addcity(cityfav) {
    if (list.find(item => item === cityfav)) {
        alert('Город уже в избранном');
        return
    }
    list.push(cityfav);
    saveFavoriteCities(list)
};

function deleteFavoriteCity(event) {
    const target = (event.target.closest('.item-city').firstElementChild.textContent);
    let index = list.findIndex(city => city == target);
    list.splice(index, 1);
    saveFavoriteCities(list)

    renderFavorite()
};

function favoriteRequest(event) {
    const target = (event.target.closest('.item-city').firstElementChild.textContent);
    inputText.value = target;

    initializeCityUrlAndTakeData(event);
};

function renderFavorite() {
    getFavoriteCities(list);

    console.log(list);
    const showlikedCities = document.querySelectorAll('.item-city');
    showlikedCities.forEach(elem => elem.remove());

    for (let city of list) {
        const newli = document.createElement('li');
        newli.className = 'item-city';
        newli.innerHTML = `<button class="text-city">${city}</button><button class="delete-city" id="delete"></button>`;
        favoriteCities.appendChild(newli)
    }
    let favoriteElementsDelete = document.querySelectorAll('.delete-city');
    favoriteElementsDelete.forEach((item) => {
        item.addEventListener('click', deleteFavoriteCity);
    });
    let favoriteElementsSearch = document.querySelectorAll('.text-city');
    favoriteElementsSearch.forEach((item) => {
        item.addEventListener('click', favoriteRequest);
    });
};

likebutton.addEventListener('click', clickFavoriteButton)



