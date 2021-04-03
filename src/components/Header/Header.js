import logo from '../../images/logo.svg';
import { Route, Switch } from "react-router-dom";
import Navigation from "../Navigation/Navigation.js"

function Header() {
    return (    
        <Switch>
            <Route exact path="/">
                <header className="header header_type_color">
                    <div className="header__container">
                        <a className="header__main-link" href="/"><img className="header__logo" src={logo} alt="Movies explorer"/></a>
                        <Navigation />
                    </div>
                </header>
            </Route>
            <Route exact path="/movies">
                <header className="header">
                    <div className="header__container">
                        <a href="/"><img className="header__logo" src={logo} alt="Movies explorer"/></a>
                        <Navigation />
                    </div>
                </header>
            </Route>
            <Route path="/saved-movies">
                <header className="header">
                    <div className="header__container">
                        <a href="/"><img className="header__logo" src={logo} alt="Movies explorer"/></a>
                        <Navigation />
                    </div>
                </header>
            </Route>
            <Route path="/profile">
                <header className="header">
                    <div className="header__container">
                        <a href="/"><img className="header__logo" src={logo} alt="Movies explorer"/></a>
                        <Navigation />
                    </div>
                </header>
            </Route>
        </Switch>
    )
}
  
export default Header;