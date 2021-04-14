import MocieSuccessfullSavedIcon from '../../../../images/movie-successfull-saved-icon.svg'
import React, { useState } from "react";

function MoviesCard({movie, onSave, savedMovies}) {
    const [movieSaved, setmovieSaved] = useState(false);
    const [saveButton, setSaveButton] = useState(true);

    const movieSavedClass = `movie__saved-icon ${movieSaved ? "" : "movie__saved-icon_type_hide"}`;
    const saveButtonClass = `movie__save ${saveButton ? "" : "movie__save_type_hide"}`;

    function handleSave() {
        setmovieSaved(true);
        setSaveButton(false);
        onSave(movie)
    }

    function isMovieSaved (movie, savedMovies) {
        if (savedMovies.find(savedMovie => savedMovie.movieId === movie.id)) {
            return true;
        }
    }

    function getTimeFromMins(mins) {
        const hours = Math.trunc(mins/60);
        const minutes = mins % 60;
        return hours + 'ч ' + minutes + 'м';
    };

    const saveContainer = (
        <div>
            <button onClick={handleSave} className={saveButtonClass}>Сохранить</button>
            <img className={movieSavedClass} alt="saved icon" src={MocieSuccessfullSavedIcon} />
        </div>
    )
    return (    
        <li className="movie">
            <img className="movie__image" alt={movie.nameRU} src={`https://api.nomoreparties.co${movie.image.url}`} />
            <div className="movie__about">
                <p className="movie__about-name">{movie.nameRU}</p>
                <p className="movie__about-duration">{getTimeFromMins(movie.duration)}</p>
            </div>
            {isMovieSaved(movie, savedMovies) ? <img className="movie__saved-icon" alt="saved icon" src={MocieSuccessfullSavedIcon} /> : saveContainer }
        </li>
    )
}

export default MoviesCard;