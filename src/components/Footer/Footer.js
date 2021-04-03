import { Route, Switch } from "react-router-dom";

function Footer() {
    return (
        <Switch>
            <Route path="/(|movies|saved-movies)/">
                <footer className="footer">
                    <p className="footer__name">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                    <div className="footer__bar">
                        <p className="footer__bar-year">©2021</p>
                        <ul className="footer__bar-nav">
                            <li className="footer__bar-nav-item"><a className="footer__bar-link" href="https://praktikum.yandex.ru/" target="_blank">Яндекс.Практикум</a></li>
                            <li className="footer__bar-nav-item"><a className="footer__bar-link" href="https://github.com/hatepk" target="_blank">Github</a></li>
                            <li className="footer__bar-nav-item"><a className="footer__bar-link" href="https://vk.com/hatepk" target="_blank">Vkontakte</a></li>
                        </ul>
                    </div>
                </footer>
            </Route>
        </Switch>
    )
}

export default Footer;