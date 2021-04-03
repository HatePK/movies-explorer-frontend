import React from 'react';
import { NavLink } from 'react-router-dom';

import closePopupIcon from "../../../images/close-popup-icon.svg"

function NavigationPopup({isOpen, onClose}) {
    console.log(isOpen);
    const popupClassName = `popup ${isOpen ? "" : "popup_type_hide"}`
    return (
        <div className={popupClassName}>
            <div className="popup__overlay"></div>
            <form className="popup__container">
                <button onClick={onClose} type="button" className="popup__close-button"><img className="popup__close-icon" alt="Закрыть" src={closePopupIcon}/></button>
                <ul className="popup__nav">
                    <li className="popup__nav-item"><NavLink className="popup__nav-link" exact to="/" activeClassName="popup__nav-link_type_active">Главная</NavLink></li>
                    <li className="popup__nav-item"><NavLink className="popup__nav-link" to="/movies" activeClassName="popup__nav-link_type_active">Фильмы</NavLink></li>
                    <li className="popup__nav-item"><NavLink className="popup__nav-link" to="/saved-movies" activeClassName="popup__nav-link_type_active">Сохраненные фильмы</NavLink></li>
                </ul>
                <NavLink to="/profile" activeClassName="popup__nav-button_type_active" className="nav__profile-button nav__profile-button_type_popup">Аккаунт</NavLink>
            </form>
        </div>
    )
}

export default NavigationPopup;