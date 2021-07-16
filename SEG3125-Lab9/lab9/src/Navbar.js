import { useTranslation } from "react-i18next";
import i18next from "i18next";
import {Link} from 'react-router-dom';

const handleLanguageEN = () => {
    i18next.changeLanguage("en");
}
const handleLanguageFR = () => {
    i18next.changeLanguage("fr");
}

const Navbar = () => {
    const {t} = useTranslation();
    
    return ( 

        <nav className="navbar">
            <img src='logo2.png' marginRight='5px'></img>
            <h1>Karasuno Volleyball Association</h1>
            <div className="links">
                <Link to="/">{t("home")}</Link>
                <Link to="/register">{t("register")}</Link>
                <Link to="/informative-videos">{t("informative_videos")}</Link>
                <Link to="/contact-us">{t("contact_us")}</Link>
            </div>
            <button onClick={() => handleLanguageEN('en')}>English</button>
            <button onClick={() => handleLanguageFR('fr')}>French</button>
        </nav>

    );
}
 
export default Navbar;

