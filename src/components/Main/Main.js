import Promo from "./Promo/Promo.js"
import NavTab from "./NavTab/NavTab.js"
import AboutProject from "./AboutProject/AboutProject.js"
import Techs from "./Techs/Techs.js"
import Portfolio from "./Portfolio/Portfolio.js"

function Main() {
    return (    
        <div className="main">
            <Promo />
            <NavTab />
            <div className="main__container">
                <AboutProject />
                <Techs />
                <Portfolio />
            </div>
        </div>
    )
}
  
export default Main;