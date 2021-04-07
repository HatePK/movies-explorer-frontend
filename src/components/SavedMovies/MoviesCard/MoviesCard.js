import React from "react";
import movieImage from '../../../images/movie-image.jpg'
import unSaveIcon from '../../../images/unsave-icon.svg'


function MoviesCard() {
    return (    
        <div className="movie">
            <img className="movie__image" src={movieImage} alt="movieimage" />
            <div className="movie__about">
                <p className="movie__about-name">33 слова о дизайне</p>
                <p className="movie__about-duration">1ч 17м</p>
            </div>
            <img className="saved-movie-unsave-icon" src={unSaveIcon} alt="unsave icon" />
        </div>
    )
}

export default MoviesCard;