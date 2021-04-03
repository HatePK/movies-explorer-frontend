function NotFound() {
    return(
        <div className="error">
            <p className="error__name">404</p>
            <p className="error__comment">Страница не найдена</p>
            <a href="/" className="error__navlink">Назад</a>
        </div>
    )
}

export default NotFound;