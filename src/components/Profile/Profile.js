import {useState, useEffect, useCallback} from 'react';
import React, { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export function FormValidation () {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState({});

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setValues({...values, [name]: value});
        setErrors({...errors, [name]: target.validationMessage});
        setIsValid(target.closest("form").checkValidity());
    }

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
          setValues(newValues);
          setErrors(newErrors);
          setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
      );

    return {values, errors, isValid, handleChange, resetForm};
}

function Profile({onSubmit, onLogout, message, statusSuccess, statusError}) {
    const [inputsVisible, setInputsVisible] = useState(false);
    const {handleChange, values, errors, isValid, resetForm} = FormValidation();
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const currentUser = useContext(CurrentUserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            email: values.email,
            name: values.name
        });
        setInputsVisible(false);
        resetForm();
    };

    useEffect(() => {
        if (isValid === true) {
            setSubmitDisabled(false)
        } else {
            setSubmitDisabled(true)
        }
    }, [isValid]);

    function handleEditPorfile() {
        setInputsVisible(true);
    }

    const submitClass = `auth__button ${submitDisabled ? "auth__button_type_unavailable" : ""}`
    function infoMessage (statusSuccess, statusError) {
        if (statusSuccess && !statusError) {
            return 'auth__info-message_type_success'
        } else if (statusError && !statusSuccess) {
            return 'auth__info-message_type_error'
        } else {
            return '';
        }
    }

    const editContainer = (
        <form onSubmit={handleSubmit} noValidate className="profile__info">
            <div className="profile__item">
                <label htmlFor="name" className="profile__title">Имя</label>
                <input 
                    name="name"
                    onChange={handleChange} 
                    type="text" 
                    className={`profile__input ${errors.name ? 'auth__input_type_error': ''}`}
                    required
                    minLength='2'
                    id="name"
                    placeholder={currentUser.name}
                />
            </div>
            <p className="auth__error-message">{errors.name !== '' && errors.name}</p>
            <div className="profile__item">
                <label htmlFor="email" className="profile__title">E-mail</label>
                <input 
                    name="email"
                    onChange={handleChange} 
                    type="email" 
                    className={`profile__input ${errors.email ? 'auth__input_type_error': ''}`}
                    required
                    id="email"
                    placeholder={currentUser.email}
                />
            </div>
            <p className="auth__error-message">{errors.email !== '' && errors.email}</p>
            <div className="profile__actions">
                <button type="submit" disabled={submitDisabled} onClick={handleSubmit} className={submitClass}>Сохранить</button>
            </div>
        </form>
    )

    const infoContainer = (
        <div className="profile__info">
            <div className="profile__item">
                <p className="profile__title">Имя</p>
                <p className="profile__value">{currentUser.name}</p>
            </div>
            <div className="profile__item">
                <p className="profile__title">E-mail</p>
                <p className="profile__value">{currentUser.email}</p>
            </div>
            <div className="profile__actions">
                <p className={`auth__info-message ${infoMessage(statusError, statusSuccess)}`}>{message}</p>
                <button onClick={handleEditPorfile} className="profile__button">Редактировать</button>
                <button onClick={onLogout} className='profile__button profile__button_type_logout'>Выйти из аккаунта</button>
            </div>
        </div>
    )

    return(
        <div className="profile">
            <h1 className="profile__header">Привет, {currentUser.name}!</h1>
            {inputsVisible ? editContainer : infoContainer}
        </div>
    )
}

export default Profile;