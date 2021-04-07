import MoviesCard from "./MoviesCard/MoviesCard.js";

function MoviesCardList() {

    return (    
        <div className="movies__container">
            <ul className="movies__list">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </ul>
        </div>
    )
}

export default MoviesCardList;