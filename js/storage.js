export const storage = {
    saveFavoriteCities(list) {
        localStorage.setItem('favoritecities', JSON.stringify(list));
    },

    getFavoriteCities(list) {
        if (JSON.parse(localStorage.getItem('favoritecities')) === null) {
            return
        }
        else if (list.length === 0) {
            let jsonarr = JSON.parse(localStorage.getItem('favoritecities'))
            for (let item of jsonarr) {
                list.push(item)
            }
        }
    },

    saveLastSearchedCity(url) {
        localStorage.setItem('currentCityUrl', url);
    },

    getLastSearchedCity() {
        return localStorage.getItem('currentCityUrl');
    }
}
