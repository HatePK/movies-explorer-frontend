import FilterCheckbox from "./FilterCheckbox/FilterCheckbox.js"
import searchIcon from '../../../images/search-icon.svg';
import decorationLine from '../../../images/search-decor-line.svg';

function SearchForm() {
    return (    
        <form className="search">
            <div className="search__container">
                <div className="search__area">
                    <input 
                        type="text" 
                        className="search__input" 
                        name="search-input"
                        placeholder="Фильм">
                    </input>
                    <button className="search__button">
                        <img className="search__icon" src={searchIcon} alt="Search"/>
                    </button>
                </div>
                <FilterCheckbox />
            </div>
        </form>
    )
}

export default SearchForm;