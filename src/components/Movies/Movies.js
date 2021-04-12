import React, { useEffect, useState } from 'react';
import MoviesCardList from "./MoviesCardList/MoviesCardList.js";
import SearchForm from "../Movies/SearchForm/SearchForm.js"
import getMovies from "../../utils/MoviesApi.js"
import Preloader from "./Preloader/Preloader.js"


function Movies({onSave, savedMovies}) {
    const [moviesCards, setMoviesCards] = useState([]);
    const [moviesCardsLength, setmoviesCardsLength] = useState(0); // сколько всего длина массива с фильмами
    const [preloaderStatus, setpreloaderStatus] = useState(false);
    const [moviesNumber, setMoviesNumber] = useState(false); // сколько отображается фильмов
    const [noFilms, setNoFilms] = useState(false)
    const localStorageMovies = JSON.parse(localStorage.getItem('cards'));
    const [checkbox, setCheckbox] = useState(false);

    const handleCheckboxChange = () => {
        setCheckbox(!checkbox)
    }

    const changeLength = (length) => {
        setmoviesCardsLength(length)
    }

    useEffect(() => {
        if (localStorageMovies !== null && localStorageMovies.length > 0) {
            if (localStorageMovies.length === 0) {
                setNoFilms(true)
            } else if (window.innerWidth >= 1280) {
                setNoFilms(false)
                setMoviesCards(localStorageMovies);
                setMoviesNumber(12)
                setmoviesCardsLength(localStorageMovies.length - 12);
            } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
                setNoFilms(false)
                setMoviesCards(localStorageMovies);
                setMoviesNumber(8)
                setmoviesCardsLength(localStorageMovies.length - 8);
            } else if (window.innerWidth >= 320 && window.innerWidth < 768) {
                setNoFilms(false)
                setMoviesCards(localStorageMovies);
                setMoviesNumber(5)
                setmoviesCardsLength(localStorageMovies.length - 5);
            }
        }
    }, [])

    const getCards = (text) => {
        setNoFilms(true)
        setpreloaderStatus(true)
        getMovies()
        .then((arr) => {
            return arr.filter(item => JSON.stringify(item).includes(text));
        })
        .then((result) => {
            setpreloaderStatus(false)
            localStorage.setItem('cards', JSON.stringify(result))
            if (result.length === 0) {
                setNoFilms(true)
            } else if (window.innerWidth >= 1280) {
                setNoFilms(false)
                setMoviesCards(result);
                setMoviesNumber(12)
                setmoviesCardsLength(result.length - 12);
            } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
                setNoFilms(false)
                setMoviesCards(result);
                setMoviesNumber(8)
                setmoviesCardsLength(result.length - 8);
            } else if (window.innerWidth >= 320 && window.innerWidth < 768) {
                setNoFilms(false)
                setMoviesCards(result);
                setMoviesNumber(5)
                setmoviesCardsLength(result.length - 5);
            }
        })
    }

    function loadMovies() {
        if (window.innerWidth >= 1280) {
            setMoviesNumber(moviesNumber + 3);
            setmoviesCardsLength(moviesCardsLength - 3);
        } else if (window.innerWidth >= 320 && window.innerWidth < 1280) {
            setMoviesNumber(moviesNumber + 2);
            setmoviesCardsLength(moviesCardsLength - 2);
        }
    }

    function moviesList() {
        if (noFilms) {
            return <Preloader preloaderAnimation={preloaderStatus} preloaderStatus={noFilms}></Preloader>;
        } else {
            return (
            <div>
                <MoviesCardList 
                    checkbox={checkbox} 
                    movies={moviesCards} 
                    onSave={onSave} 
                    number={moviesNumber} 
                    savedMovies={savedMovies} 
                    changeLength={changeLength}
                />
                {moviesCardsLength > 0 ? <Preloader movies={moviesCards} preloaderAnimation={preloaderStatus} handleMoreClick={loadMovies} /> : ''}
            </div>)
        }
    }

    return (    
        <div className="movies">
            <SearchForm onSearchClick={getCards} changeCbx={handleCheckboxChange} />
            {moviesList()}
        </div>
    )
}
  
export default Movies;