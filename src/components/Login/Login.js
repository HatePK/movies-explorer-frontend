import logo from '../../images/logo.svg';
import {useState, useEffect} from 'react';

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

function Login({onLogin}) {
    const {handleChange, values, errors, isValid} = FormValidation();
    const [validSubmit, setValidSubmit] = useState(true);
    const [submitDisabled, setSubmitDisabled] = useState(true);

    const handleSubmit = (e) => {
            e.preventDefault();
            onLogin({
                email: values.email,
                password: values.password
            });
    };

    useEffect(() => {
        if (isValid === true) {
            setSubmitDisabled(false)
        } else {
            setSubmitDisabled(true)
        }
    }, [isValid]);

    const submitClass = `auth__button ${submitDisabled ? "auth__button_type_unavailable" : ""}`
    const errMessageClass = `auth__button-err-message ${validSubmit ? "auth__button-err-message_type_hide" : ""}`;

    return(
        <div className="auth">
            <img className="auth__logo" src={logo} alt="Movies explorer"/>
            <h1 className="auth__header">Рады видеть!</h1>
            <form onSubmit={handleSubmit} noValidate className="auth__form">
                <div className="auth__field">
                    <label className="auth__label" for="email">E-mail</label>
                    <input 
                        name="email" 
                        onChange={handleChange} 
                        className={`auth__input ${errors.email ? 'auth__input_type_error': ''}`} 
                        type="email" 
                        required 
                        id="email" 
                    />
                    <p className="auth__error-message">{errors.email !== '' && errors.email}</p>
                </div>
                <div className="auth__field">
                    <label className="auth__label" for="password">Пароль</label>
                    <input 
                        name="password" 
                        onChange={handleChange} 
                        className={`auth__input ${errors.password ? 'auth__input_type_error': ''}`} 
                        type="password" 
                        minlength="2" 
                        required 
                        id="password" 
                    />
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