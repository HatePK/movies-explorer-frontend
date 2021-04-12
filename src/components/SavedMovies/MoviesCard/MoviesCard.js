import React from "react";
import MovieDeleteIcon from '../../../images/delete-movie-icon.svg'

function MoviesCard({movie, onDelete, onSearchDelete}) {
    function getTimeFromMins(mins) {
        let hours = Math.trunc(mins/60);
        let minutes = mins % 60;
        return hours + 'ч ' + minutes + 'м';
    };

    function handleDelete() {
        onDelete(movie._id)
        onSearchDelete(movie._id)
    }

    return (    
        <div className="movie">
            <img className="movie__image" alt={movie.nameRU} src={movie.image} />
            <div className="movie__about">
                <p className="movie__about-name">{movie.nameRU}</p>
                <p className="movie__about-duration">{getTimeFromMins(movie.duration)}</p>
            </div>
            <button className="saved-movie-unsave-button" onClick={handleDelete}><img src={MovieDeleteIcon} alt="movie-delete-icon" /></button>
        </div>
    )
}

export default MoviesCard;