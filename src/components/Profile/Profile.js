import {useState, useCallback} from 'react';

function Profile() {
    const [isHide, setIsHide] = useState(false);
    const [SubmitHide, setSubmitHide] = useState(true);
    const [logoutHide, setlogoutHide] = useState(false);

    function handleEditPorfile () {
        setIsHide(true);
        setSubmitHide(false);
        setlogoutHide(true);
    }

    const profileEditButtonClass = `profile__button ${isHide ? 'profile__button_type_hide' : ''}`
    const SubmitButtonClass = `auth__button ${SubmitHide ? "profile__button_type_hide" : ""}`
    const LogOutClass = `profile__button profile__button_type_logout ${logoutHide ? "profile__button_type_hide" : ""}`

    return(
        <div className="profile">
            <h1 className="profile__header">Привет, Дмитрий!</h1>
            <div className="profile__info">
                <div className="profile__item">
                    <p className="profile__title">Имя</p>
                    <input className="profile__input" value="hatepk@gmail.com" />
                </div>
                <div className="profile__item">
                    <p className="profile__title">E-mail</p>
                    <input className="profile__input" value="Дмитрий" />
                </div>
            </div>
            <div className="profile__actions">
                <button onClick={handleEditPorfile} href="#" className={profileEditButtonClass}>Редактировать</button>
                <button type="submit" className={SubmitButtonClass}>Сохранить</button>
                <a href="/" className={LogOutClass}>Выйти из аккаунта</a>
            </div>
        </div>
    )
}

export default Profile;

{/* <p className="profile__value">hatepk@gmail.com</p> */}
{/* <p className="profile__value">Дмитрий</p> */}