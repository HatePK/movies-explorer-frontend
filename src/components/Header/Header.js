import { Route, Switch } from "react-router-dom";
import Navigation from "../Navigation/Navigation.js"

function Header({loggedIn}) {
    return (    
        <Switch>
            <Route exact path="/">
                <header className="header header_type_color">
                        <Navigation loggedIn={loggedIn}/>
                </header>
            </Route>
            <Route exact path="/(profile|movies|saved-movies)/">
                <header className="header">
                        <Navigation loggedIn={loggedIn}/>
                </header>
            </Route>
        </Switch>
    )
}
  
export default Header;