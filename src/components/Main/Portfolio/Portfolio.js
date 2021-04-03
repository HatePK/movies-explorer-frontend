import avatar from "../../../images/avatar.jpg"

function Portfolio() {
    return (
        <div id="about-me" className="portfolio">
            <h2 className="main__section-header">Студент</h2>
            <div className="portfolio__info">
                <div className="portfolio__info-about">
                    <div className="portfolio__info-about-container">
                        <h3 className="portfolio__info-about-name">Дмитрий</h3>
                        <p className="portfolio__info-about-prof">Фронтенд-разработчик, 28 лет</p>
                        <p className="portfolio__info-about-life">Я родился в Мурманске и живу в Санкт-Петербурге, закончил факультет экономики РГСУ. Я люблю слушать музыку, читать и заниматься саморазвитием. Недавно начал кодить. Закончил курс в Практикуме, и планирую искать работу в направлении веб-разработки.</p>
                    </div>
                    <ul className="portfolio__info-about-accounts">
                        <li className="portfolio__info-about-accounts-item"><a target="_blank" rel="noreferrer" className="portfolio__info-about-accounts-item-link" href="https://vk.com/hatepk">Vkontakte</a></li>
                        <li className="portfolio__info-about-accounts-item"><a target="_blank" rel="noreferrer" className="portfolio__info-about-accounts-item-link" href="https://github.com/hatepk">Github</a></li>
                    </ul>
                </div>
                <img className="portfolio__info-avatar" alt="avatar" src={avatar} />
            </div>
            <div className="portfolio__links">
                <h4 className="portfolio__links-header">Портфолио</h4>
                <ul className="portfolio__links-list">
                    <li className="portfolio__links-item">
                        <a href="https://github.com/HatePK/how-to-learn" target="_blank" rel="noreferrer" className="portfolio__links-name">Статичный сайт</a>
                        <a href="https://github.com/HatePK/how-to-learn" target="_blank" rel="noreferrer" className="portfolio__links-icon">↗</a>
                    </li>
                    <li className="portfolio__links-item">
                        <a href="https://github.com/HatePK/how-to-learn" target="_blank" rel="noreferrer" className="portfolio__links-name">Адаптивный сайт</a>
                        <a href="https://github.com/HatePK/how-to-learn" target="_blank" rel="noreferrer" className="portfolio__links-icon">↗</a>
                    </li>
                    <li className="portfolio__links-item">
                        <a href="https://github.com/HatePK/how-to-learn" target="_blank" rel="noreferrer" className="portfolio__links-name">Одностраничное приложение</a>
                        <a href="https://github.com/HatePK/how-to-learn" target="_blank" rel="noreferrer" className="portfolio__links-icon">↗</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Portfolio;