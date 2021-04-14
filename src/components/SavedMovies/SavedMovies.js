import React, {useState, useEffect} from 'react';
import SearchForm from "../Movies/SearchForm/SearchForm.js"
import MoviesCardList from "./MoviesCardList/MoviesCardList.js"

function SavedMovies({savedMovies, onDelete}) {
    const [SearchResultMovies, setSearchResultMovies] = useState([])
    const [start, setStart] = useState(false);
    const [isSearchResult, setIsSearchResult] = useState(false)
    const [emptyResults, setEmptyResults] = useState(false)
    const [checkbox, setCheckbox] = useState(false);

    const handleCheckboxChange = () => {
        setCheckbox(!checkbox)
    }

    function filterMovies(input) {
        const results = savedMovies.filter(item => JSON.stringify(item).includes(input))
        setSearchResultMovies(results)
        setStart(true);
    }

    const searchMovie = (text) => {
        setEmptyResults(false);
        filterMovies(text);
    }

    useEffect(() => {
        if (!start) {
            setEmptyResults(false);
            setIsSearchResult(false)
        } else if (SearchResultMovies.length > 0) {
            console.log("есть результаты")
            setEmptyResults(false);
            setIsSearchResult(true)
        } else if (SearchResultMovies.length === 0) {
            console.log("нету результата")
            setIsSearchResult(false)
            setEmptyResults(true);
        }
    }, [SearchResultMovies, start])

    const handleSearchDelete = (id) => {
        const newSearchMovies = SearchResultMovies.filter((movie) => movie._id !== id);
        setSearchResultMovies(newSearchMovies);
    }

    return (    
        <div className="movies movies_type_saved-movies">
            <SearchForm onSearchClick={searchMovie} changeCbx={handleCheckboxChange} />
            <MoviesCardList 
                checkbox={checkbox} 
                movies={savedMovies} 
                searchMovies={SearchResultMovies}
                searchStatus={isSearchResult} 
                onDelete={onDelete} 
                onSearchDelete={handleSearchDelete}
                emptyResults={emptyResults} 
            />
        </div>
    )
}
  
export default SavedMovies;