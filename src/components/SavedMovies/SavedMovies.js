import SearchForm from "../Movies/SearchForm/SearchForm.js"
import MoviesCardList from "./MoviesCardList/MoviesCardList.js"

function SavedMovies() {
    return (    
        <div className="movies movies_type_saved-movies">
            <SearchForm />
            <MoviesCardList />
        </div>
    )
}
  
export default SavedMovies;