import React, {useState, useEffect} from 'react';
import { Route, Redirect, Switch, useHistory } from "react-router-dom";
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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
const jwt = localStorage.getItem('jwt')


function App() {
    const history = useHistory();
    const [currentUser, setCurrentUser] = useState({})
    const [savedMovies, setSavedMovies] = useState([]);
    const [Message, setMessage] = useState('');
    const [StatusSuccess, seteditStatusSuccess] = useState(false);
    const [StatusError, seteditStatusError] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        if (jwt) {
            tokenCheck(jwt);
            getSavedMovies(jwt);
        }
    }, [])

    const tokenCheck = (jwt) => {
        getCurrentUser(jwt)
            .then((res) => {
                setCurrentUser({email: res.email, name: res.name})
                setLoggedIn(true);
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
            seteditStatusError(true);
            setMessage('')
            if (res) {
                handleLogin({password, email})
            } 
        })
        .catch((err) => {
            if (err === 409) {
                setMessage('E-mail уже существует')
                seteditStatusError(false);
            } else {
                setMessage('Ошибка на сервере')
                seteditStatusError(false);
            }
        })
    }

    const handleLogin = ({email, password}) => {
        return authorisation({password, email})
        .then((res) => {
            if (!res || res.statusCode === 400) {
                throw new Error('Ошибка');
            };
            if (res.token) {
                setMessage('')
                seteditStatusError(true);
                localStorage.setItem('jwt', res.token)
                setLoggedIn(true);
                getSavedMovies(res.token);
                return getCurrentUser(res.token)
                    .then((res) => {
                        setCurrentUser({email: res.email, name: res.name})
                        history.push('/movies');
                    })
            }
        }).catch((err) => {
            if (err === 401) {
                setMessage('Неверный логин или пароль')
                seteditStatusError(false);
            } else {
                setMessage('Ошибка на сервере')
                seteditStatusError(false);
            }
        })
        
    }

    const handleLogout = () => {
        localStorage.removeItem('jwt');
        setLoggedIn(false)
        history.push('/');
    }

    const handleEditProfile = ({name, email}) => {
        return updateUser (email, name, jwt)
        .then((res) => {
            setCurrentUser({email: res.email, name: res.name})
            setMessage('Данные изменены')
            seteditStatusError(true);
            seteditStatusSuccess(false);
        })
        .catch(() => {
            setMessage('Ошибка на сервере')
            seteditStatusError(false);
            seteditStatusSuccess(true);
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
            <Header loggedIn={loggedIn}/>
            <Switch>
                <Route exact path="/" component={Main} />
                <ProtectedRoute path="/movies" 
                    component={Movies}
                    onSave={handleSaveMovie} 
                    savedMovies={savedMovies} 
                />
                <ProtectedRoute path="/saved-movies" 
                    component={SavedMovies}
                    savedMovies={savedMovies}
                    onDelete={handleDeleteMovie}
                />
                <ProtectedRoute path="/profile" 
                    component={Profile}
                    onSubmit={handleEditProfile} 
                    onLogout={handleLogout} 
                    message={Message} 
                    statusSuccess={StatusSuccess}
                    statusError={StatusError}
                />
                <Route path="/signin">
                    <Login 
                        onLogin={handleLogin}
                        message={Message} 
                        statusError={StatusError}
                    />
                </Route>
                <Route path="/signup">
                    <Register 
                        onRegister={handleRegister} 
                        message={Message} 
                        statusError={StatusError}
                    />
                </Route>
                <Route path="/not-found">
                    <NotFound back={history.goBack} />
                </Route>
                <Route>
                    <Redirect to="/not-found" />
                </Route>
            </Switch>
            <Footer />
        </CurrentUserContext.Provider>
    );
}

export default App;