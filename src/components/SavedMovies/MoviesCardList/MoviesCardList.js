import MoviesCard from "../MoviesCard/MoviesCard.js";

function MoviesCardList({movies, searchMovies, searchStatus, onDelete, onSearchDelete, emptyResults, checkbox}) {
    
    function renderCards(cards) {
        if (checkbox) {
            return cards.filter((movie) => movie.duration < 40).map((movie) => {
                return <MoviesCard key={movie.nameEN} movie={movie} onDelete={onDelete} onSearchDelete={onSearchDelete} />
            })
        } else {
            return cards.map((movie) => {
                return <MoviesCard key={movie.nameEN} movie={movie} onDelete={onDelete} onSearchDelete={onSearchDelete} />
            })
        }
    }

    const ShowMovies = (
        <ul className="movies__list">
                {renderCards(movies)}
        </ul>
    )

    const ShowSearchMovies = (
        <ul className="movies__list">
                {renderCards(searchMovies)}
        </ul>
    )

    const showNoResults = <p className="movies__more-no-text movies__more-no-text_type_saved-movies">Ничего не найдено</p>
    
    console.log(searchStatus)
    console.log(emptyResults)

    function showResults (searchStatus, emptyResults, movies, searchMovies, noResults) {
        if (searchStatus && !emptyResults) {
            return searchMovies;
        } else if (!searchStatus && emptyResults) {
            return noResults;
        } else if (!searchStatus && !emptyResults) {
            return movies;
        }
    }

    return (    
        <div className="movies__container">
            {showResults(searchStatus, emptyResults, ShowMovies, ShowSearchMovies, showNoResults)}
        </div>
    )
}

export default MoviesCardList;