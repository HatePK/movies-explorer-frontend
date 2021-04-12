const BASE_URL = 'https://api.padchin.ru';
const checkResponse = (response) => response.ok ? response.json() : Promise.reject('error');

export const getMovies = (token) => {
    return fetch(`${BASE_URL}/movies`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
        }
    })
    .then(checkResponse)
}

export const createMovie = ({
            country,
            director,
            duration,
            year,
            description,
            image,
            trailer,
            nameRU,
            nameEN,
            thumbnail,
            movieId,
            token
        }) => {
        return fetch(`${BASE_URL}/movies`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
        },
        body: JSON.stringify({
            country,
            director,
            duration,
            year,
            description,
            image,
            trailer,
            nameRU,
            nameEN,
            thumbnail,
            movieId})
    })
    .then(checkResponse)
};

export const deleteMovie = (id, token) => {
    return fetch(`${BASE_URL}/movies/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
        },
        body: JSON.stringify({id})
    })
    .then(checkResponse)
}

export const getCurrentUser = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
        }
    })
    .then(checkResponse)
}

export const updateUser = (email, name, token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
        },
        body: JSON.stringify({email, name})
    })
    .then(checkResponse)
}

export const register = (name, password, email) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify({name, password, email})
    })
    .then(checkResponse)
};

export const authorisation = ({email, password}) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify({password, email})
    })
    .then(checkResponse)
};