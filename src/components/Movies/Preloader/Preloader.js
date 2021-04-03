import React, { useState } from "react";
import './Preloader.css'

const Preloader = (hide) => {
    const [preloader, setpreloader] = useState(false)
    const [moreButton, setmoreButton] = useState(true)

    function makePreloader() {
        setpreloader(true);
        setmoreButton(false);
    }

    function delPreloader() {
        setpreloader(false);
        setmoreButton(true);
    }

    function handleSubmit(e) {
        e.preventDefault();
        makePreloader();
        setTimeout(delPreloader, 2000)
    }

    const moreButtonClass = (`movies__more-button ${moreButton ? '' : 'movies__more-button_type_unvisible'}`);

    const preloaderClassName = 
        (`preloader ${preloader ? '' : 'preloader_type_unvisible'}`
    );
    
    console.log(hide.hide);
    return (
        <div className="movies__more">
            <button onClick={handleSubmit} className={moreButtonClass}>Ещё</button>
            <div className={preloaderClassName}>
                <div className="preloader__container">
                    <span className="preloader__round"></span>
                </div>
            </div>
        </div>
    )
};

export default Preloader
