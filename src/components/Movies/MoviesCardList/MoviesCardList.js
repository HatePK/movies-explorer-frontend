import MoviesCard from "./MoviesCard/MoviesCard.js";

function MoviesCardList({checkbox, movies, number, onSave, savedMovies, changeLength}) {

    function renderCards(cards) {
            if (checkbox) {
                const newArray = cards.filter((movie) => movie.duration < 40).slice(0, number)
                changeLength(0)
                return newArray.map((movie) => {
                    return <MoviesCard onSave={onSave} movie={movie} savedMovies={savedMovies} />
                })
            } else {
                const newArray = cards.slice(0, number)
                return newArray.map((movie) => {
                    return <MoviesCard onSave={onSave} movie={movie} savedMovies={savedMovies} />
                })
            }   
        }

    function MoviesContainer() {
        if (number === false) {
            return <div className="movies__empty-container"></div>
        } else {
            return (
                <div className="movies__container">
                    <ul className="movies__list">
                        {renderCards(movies)}
                    </ul>
                </div>
            )
        }
    }

    return (    
        MoviesContainer()
    )
}

export default MoviesCardList;