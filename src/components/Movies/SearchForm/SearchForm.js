import React, { useRef } from "react";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox.js"
import searchIcon from '../../../images/search-icon.svg';


function SearchForm({onSearchClick, changeCbx}) {
    const searchInput = useRef();
    function handleSearchClick(e) {
        e.preventDefault();
        onSearchClick(searchInput.current.value);
    }

    return (    
        <form className="search">
            <div className="search__container">
                <div className="search__area">
                    <input 
                        type="text" 
                        className="search__input" 
                        name="search-input"
                        placeholder="Фильм"
                        ref={searchInput} 
                    />
                    <button className="search__button" onClick={handleSearchClick}>
                        <img className="search__icon" src={searchIcon} alt="Search"/>
                    </button>
                </div>
                <FilterCheckbox changeCbx={changeCbx}/>
            </div>
        </form>
    )
}

export default SearchForm;