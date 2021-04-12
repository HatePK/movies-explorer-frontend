import React, { useState } from "react";
import './Preloader.css'

const Preloader = ({movies, preloaderAnimation, handleMoreClick, preloaderStatus}) => {

    function handleSubmit(e) {
        e.preventDefault();
        handleMoreClick();
    }

    const preloaderClassName = (`preloader ${preloaderAnimation ? '' : 'preloader_type_unvisible'}`);
    const moreTextClassName = (`movies__more_text ${preloaderAnimation ? 'movies__more_text_type_unvisible' : ''}`);

    return (
        <div className='movies__more'>
            <div className={moreTextClassName}>
                {preloaderStatus === true ? <p className="movies__more-no-text">Ничего не найдено</p> : <button onClick={handleSubmit} className='movies__more-button'>Ещё</button>}
            </div>
            <div className={preloaderClassName}>
                <div className="preloader__container">
                    <span className="preloader__round"></span>
                </div>
            </div>
        </div>
    )
};

export default Preloader
