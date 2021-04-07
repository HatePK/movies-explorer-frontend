import menuIcon from '../../images/icon-menu.svg';
import React, { useState } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import NavigationPopup from "./NavigationPopup/NavigationPopup.js"

function Navigation() {
    const [openPopup, setOpenPopup] = useState(false)

    const handleNavClick = () => {
        setOpenPopup(true);
    };

    const handleCloseClick = () => {
        setOpenPopup(false);
    };

    return(
        <Switch>
            <Route exact path="/">
                <div className="nav__main-links">
                    <a href="/signup" className="nav__main-link">Регистрация</a>
                    <a href="/signin" className="nav__main-link-big">Войти</a>
                </div>
            </Route>
            <Route path="/movies">
                <ul className="nav__center">
                    <li className="nav__center-element"><NavLink activeClassName="nav__center-element-link_type-active" className="nav__center-element-link" to="/movies">Фильмы</NavLink></li>
                    <li className="nav__center-element"><NavLink activeClassName="nav__center-element-link_type-active" className="nav__center-element-link" to="/saved-movies">Сохраненные фильмы</NavLink></li>
                </ul>
                <NavLink activeClassName="nav__center-element-link_type-active" to="/profile" className="nav__profile-button">Аккаунт</NavLink>
                <button onClick={handleNavClick} className="nav__mobile-button"><img className="nav__mobile-icon" src={menuIcon}/></button>
                <NavigationPopup isOpen={openPopup} onClose={handleCloseClick} />
            </Route>
            <Route path="/saved-movies">
                <ul className="nav__center">
                    <li className="nav__center-element"><a className="nav__center-element-link" href="/movies">Фильмы</a></li>
                    <li className="nav__center-element"><a className="nav__center-element-link nav__center-element-link_type-active" href="saved-movies">Сохраненные фильмы</a></li>
                </ul>
                <a href="/profile" className="nav__profile-button">Аккаунт</a>
                <button onClick={handleNavClick} className="nav__mobile-button"><img className="nav__mobile-icon" src={menuIcon}/></button>
                <NavigationPopup isOpen={openPopup} onClose={handleCloseClick} />
            </Route>
            <Route path="/profile">
                <ul className="nav__center">
                    <li className="nav__center-element"><a className="nav__center-element-link" href="/movies">Фильмы</a></li>
                    <li className="nav__center-element"><a className="nav__center-element-link" href="saved-movies">Сохраненные фильмы</a></li>
                </ul>
                <a href="/profile" className="nav__profile-button">Аккаунт</a>
                <button onClick={handleNavClick} className="nav__mobile-button"><img className="nav__mobile-icon" src={menuIcon}/></button>
                <NavigationPopup isOpen={openPopup} onClose={handleCloseClick} />
            </Route>
        </Switch>
    )
}

export default Navigation;