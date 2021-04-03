import movieImage from '../../../../images/movie-image.jpg'
import MocieSuccessfullSavedIcon from '../../../../images/movie-successfull-saved-icon.svg'
import React, { useState } from "react";

function MoviesCard() {
    const [movieSaved, setmovieSaved] = useState(false);
    const [saveButton, setSaveButton] = useState(true);

    const movieSavedClass = `movie__saved-icon ${movieSaved ? "" : "movie__saved-icon_type_hide"}`;
    const saveButtonClass = `movie__save ${saveButton ? "" : "movie__save_type_hide"}`;

    function handleSave() {
        setmovieSaved(true);
        setSaveButton(false);
    }

    return (    
        <div className="movie">
            <img className="movie__image" src={movieImage}/>
            <div className="movie__about">
                <p className="movie__about-name">33 слова о дизайне</p>
                <p className="movie__about-duration">1ч 17м</p>
            </div>
            <button onClick={handleSave} className={saveButtonClass}>Сохранить</button>
            <img className={movieSavedClass} alt="saved icon" src={MocieSuccessfullSavedIcon} />
        </div>
    )
}

export default MoviesCard;