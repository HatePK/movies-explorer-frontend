import logo from '../../images/logo.svg';
import {useState, useEffect } from 'react';

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

    return {values, errors, isValid, handleChange};
}

function Register({onRegister, errorMessage}) {
    const {handleChange, values, errors, isValid} = FormValidation();
    const [validForm, setvalidForm] = useState(true);
    const [submitDisabled, setSubmitDisabled] = useState(true);

    const handleSubmit = (e) => {
            e.preventDefault();
            onRegister({
                name: values.name,
                email: values.email,
                password: values.password
            })
    };

    useEffect(() => {
        if (isValid === true) {
            setSubmitDisabled(false)
        } else {
            setSubmitDisabled(true)
        }
    }, [isValid]);

    const submitClass = `auth__button ${submitDisabled ? "auth__button_type_unavailable" : ""}`
    const errMessageClass = `auth__button-err-message ${validForm ? "auth__button-err-message_type_hide" : ""}`;

    return(
        <div className="auth">
            <img className="auth__logo" src={logo} alt="Movies explorer"/>
            <h1 className="auth__header">Добро пожаловать!</h1>
            <form onSubmit={handleSubmit} noValidate className="auth__form">
                <div className="auth__field">
                    <label className="auth__label" for="name">Имя</label>
                    <input 
                        className={`auth__input ${errors.name ? 'auth__input_type_error' : ''}`} 
                        name="name" 
                        onChange={handleChange} 
                        type="text" 
                        minlength="2" 
                        required id="name" 
                    />
                    <p className="auth__error-message">{errors.name !== '' && errors.name}</p>
                </div>
                <div className="auth__field">
                    <label className="auth__label" for="email">E-mail</label>
                    <input 
                        className={`auth__input ${errors.email ? 'auth__input_type_error' : ''}`} 
                        name="email" type="email" 
                        onChange={handleChange} 
                        required id="email" 
                    />
                    <p className="auth__error-message">{errors.email !== '' && errors.email}</p>
                </div>
                <div className="auth__field">
                    <label className="auth__label" for="password">Пароль</label>
                    <input 
                        className={`auth__input ${errors.password ? 'auth__input_type_error' : ''}`} 
                        name="password" 
                        onChange={handleChange} 
                        type="password" minlength="2" 
                        required id="password" 
                    />
                    <p className="auth__error-message">{errors.password !== '' && errors.password}</p>
                </div>
                <div className="auth__submit-area">
                    <p className={errMessageClass}>{errorMessage}</p>
                    <button type="submit" disabled={submitDisabled} className={submitClass}>Зарегистрироваться</button>
                </div>
            </form>
            <p className="auth__link">Уже зарегистрированы? <a className="auth__link-button" href="/signin">Войти</a></p>
        </div>
    )
}

export default Register;