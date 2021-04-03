import logo from '../../images/logo.svg';
import {useState, useCallback} from 'react';

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

    const resetForm = useCallback (
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    return {values, handleChange, errors, isValid, resetForm};
}

function Login() {
    const {handleChange, errors, isValid} = FormValidation();
    const [validSubmit, setValidSubmit] = useState(true);
    const [submitDisabled, setSubmitDisabled] = useState(false);
    const handleSubmit = (e) => {
            e.preventDefault();
            setValidSubmit(false);
            setSubmitDisabled(true);
    };

    const submitClass = `auth__button ${isValid ? "": "auth__button_type_unavailable"} ${validSubmit ? "": "auth__button_type_unavailable"}`
    const errMessageClass = `auth__button-err-message ${validSubmit ? "auth__button-err-message_type_hide" : ""}`;

    return(
        <div className="auth">
            <img className="auth__logo" src={logo} alt="Movies explorer"/>
            <h1 className="auth__header">Рады видеть!</h1>
            <form onSubmit={handleSubmit} noValidate className="auth__form">
                <div className="auth__field">
                    <label className="auth__label" for="email">E-mail</label>
                    <input name="email" onChange={handleChange} className={`auth__input ${errors.email !== '' && 'auth__input_type_error'}`} type="email" required id="email" />
                    <p className="auth__error-message">{errors.email !== '' && errors.email}</p>
                </div>
                <div className="auth__field">
                    <label className="auth__label" for="password">Пароль</label>
                    <input name="password" onChange={handleChange} className={`auth__input ${errors.password !== '' && 'auth__input_type_error'}`} type="password" minlength="2" required id="password" />
                    <p className="auth__error-message">{errors.password !== '' && errors.password}</p>
                </div>
                <div className="auth__submit-area">
                    <p className={errMessageClass}>При регистрации произошла ошибка</p>
                    <button disabled={submitDisabled} className={submitClass}>Войти</button>
                </div>
            </form>
            <p className="auth__link">Ещё не зарегистрированы? <a className="auth__link-button" href="/signup">Регистрация</a></p>
        </div>
    )
}

export default Login;