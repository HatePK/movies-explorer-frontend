import {useState, useEffect, useCallback} from 'react';
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

function Profile({userInfo, onSubmit, onLogout}) {
    const [inputsVisible, setInputsVisible] = useState(false);
    const {handleChange, values, errors, isValid, resetForm} = FormValidation();
    const [submitDisabled, setSubmitDisabled] = useState(true);

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

    const submitClass = `auth__button ${submitDisabled ? "auth__button_type_unavailable" : ""}`

    const editContainer = (
        <form onSubmit={handleSubmit} noValidate className="profile__info">
            <div className="profile__item">
                <label for="name" className="profile__title">Имя</label>
                <input 
                    name="name"
                    onChange={handleChange} 
                    type="text" 
                    className={`profile__input ${errors.name ? 'auth__input_type_error': ''}`}
                    required
                    id="name"
                    placeholder={userInfo.name} 
                />
            </div>
            <p className="auth__error-message">{errors.name !== '' && errors.name}</p>
            <div className="profile__item">
                <label for="email" className="profile__title">E-mail</label>
                <input 
                    name="email"
                    onChange={handleChange} 
                    type="email" 
                    className={`profile__input ${errors.email ? 'auth__input_type_error': ''}`}
                    required
                    id="email"
                    placeholder={userInfo.email} 
                />
            </div>
            <p className="auth__error-message">{errors.email !== '' && errors.email}</p>
            <div className="profile__actions">
                <button type="submit" disabled={submitDisabled} onClick={handleSubmit} className={submitClass}>Сохранить</button>
            </div>
        </form>
    )

    function handleEditPorfile() {
        setInputsVisible(true);
    }

    const infoContainer = (
        <div className="profile__info">
            <div className="profile__item">
                <p className="profile__title">Имя</p>
                <p className="profile__value">{userInfo.name}</p>
            </div>
            <div className="profile__item">
                <p className="profile__title">E-mail</p>
                <p className="profile__value">{userInfo.email}</p>
            </div>
            <div className="profile__actions">
                <button onClick={handleEditPorfile} className="profile__button">Редактировать</button>
                <button onClick={onLogout} className='profile__button profile__button_type_logout'>Выйти из аккаунта</button>
            </div>
        </div>
    )

    return(
        <div className="profile">
            <h1 className="profile__header">Привет, {userInfo.name}!</h1>
            {inputsVisible ? editContainer : infoContainer}
        </div>
    )
}

export default Profile;