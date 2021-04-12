import React, {useState, useEffect} from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import Header from "../Header/Header.js";
import NotFound from "../NotFound/NotFound.js"
import Footer from "../Footer/Footer.js"
import Login from "../Login/Login.js";
import Main from "../Main/Main.js";
import Movies from "../Movies/Movies.js";
import Profile from "../Profile/Profile.js";
import Register from "../Register/Register.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import { register, authorisation, getCurrentUser, updateUser, createMovie, getMovies, deleteMovie } from "../../utils/MainApi";
import CurrentUserContext from "../../contexts/CurrentUserContext";
const jwt = localStorage.getItem('jwt')


function App() {
    const history = useHistory();
    const [currentUser, setCurrentUser] = useState({})
    const [userData, setUserData] = useState({email: '', name: ''})
    const [savedMovies, setSavedMovies] = useState([]);
    const [errorMessageRegister, seterrorMessageRegister] = useState('');

    useEffect(() => {
        if (jwt) {
            tokenCheck(jwt);
            getSavedMovies(jwt);
        }
    }, [])

    const tokenCheck = (jwt) => {
        getCurrentUser(jwt)
            .then((res) => {
                setUserData({email: res.email, name: res.name})
                setCurrentUser(res);
        })
    }

    const getSavedMovies = (jwt) => {
        getMovies(jwt)
        .then((movies) => {
            setSavedMovies(movies)
        })
    }

    const handleRegister = ({name, password, email}) => {
        return register(name, password, email)
        .then((res) => {
            if (res) {
                handleLogin({password, email})
            } 
        })
        .catch(() => {
            seterrorMessageRegister('Ошибка на сервере')
        })
    }

    const handleLogin = ({email, password}) => {
        return authorisation({password, email})
        .then((res) => {
            if (!res || res.statusCode === 400) {
                throw new Error('Ошибка');
            };
            if (res.token) {
                localStorage.setItem('jwt', res.token)
                return getCurrentUser(res.token)
                    .then((res) => {
                        setUserData({email: res.email, name: res.name})
                        setCurrentUser(res);
                        history.push('/movies');
                    })
            }
        })
    }

    const handleLogout = () => {
        localStorage.removeItem('jwt');
        history.push('/');
    }

    const handleEditProfile = ({name, email}) => {
        return updateUser (email, name, jwt)
        .then((res) => {
            setUserData({email: res.email, name: res.name})
        })
    }

    const handleSaveMovie = (movie) => {
            return createMovie ({
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: `https://api.nomoreparties.co${movie.image.url}`,
                trailer: movie.trailerLink,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
                thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
                movieId: movie.id,
                token: jwt
            })
            .then((movie) => {
                setSavedMovies([...savedMovies, movie])
            })
    }

    const handleDeleteMovie = (id) => {
        return deleteMovie (id, jwt)
        .then(() => {
            const newSavedMovies = savedMovies.filter((movie) => movie._id !== id);
            setSavedMovies(newSavedMovies);
        })
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <Header />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/movies">
                    <Movies onSave={handleSaveMovie} savedMovies={savedMovies} />
                </Route> 
                <Route path="/saved-movies">
                    <SavedMovies savedMovies={savedMovies} onDelete={handleDeleteMovie} />
                </Route>
                <Route path="/profile">
                    <Profile userInfo={userData} onSubmit={handleEditProfile} onLogout={handleLogout} />
                </Route>
                <Route path="/signin">
                    <Login onLogin={handleLogin} />
                </Route>
                <Route path="/signup">
                    <Register onRegister={handleRegister} errorMessage={errorMessageRegister} />
                </Route>
                <Route path="/not-found" component={NotFound} />
            </Switch>
            <Footer />
        </CurrentUserContext.Provider>
    );
}

export default App;