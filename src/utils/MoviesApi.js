const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';
const checkResponse = (response) => response.ok ? response.json() : Promise.reject('error');

const getMovies = () => {
    return fetch(`${BASE_URL}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(checkResponse)
}

export default getMovies;