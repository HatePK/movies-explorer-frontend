import MoviesCardList from "./MoviesCardList/MoviesCardList.js";
import SearchForm from "../Movies/SearchForm/SearchForm.js"
import Preloader from "./Preloader/Preloader.js"


function Movies() {
    return (    
        <div className="movies">
            <SearchForm />
            <MoviesCardList />
            <Preloader />
        </div>
    )
}
  
export default Movies;