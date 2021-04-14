function NotFound({back}) {
    console.log(back)
    return(
        <div className="error">
            <p className="error__name">404</p>
            <p className="error__comment">Страница не найдена</p>
            <button onClick={back} className="error__navlink">Назад</button>
        </div>
    )
}

export default NotFound;