import food from './food.js';

class DaftarMenu {
    static foodFinder(keyword) {
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.meals) {
                    return Promise.resolve(responseJson.meals);
                } else {
                    return Promise.reject(`${keyword} is not found`)
                }
            })
    }
}

export default DaftarMenu;

/*
class DataSource {
    static searchClub(keyword) {
        return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${keyword}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.meals) {
                    return Promise.resolve(responseJson.meals);
                } else {
                    return Promise.reject(`${keyword} is not found`)
                }
            })
    }
}

export default DataSource;
*/