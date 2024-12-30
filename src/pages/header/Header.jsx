import {useContext} from "react";
import {LanguageContext} from "../../services/contexts/LanguageContext"
import {Nav} from './components/Nav'
import {Logo} from '../../global/components/Logo'
export  function Header() {
    const { language, langs, changeLanguage} = useContext(LanguageContext)
    return (
        <header>
            <div>
                <button onClick={() => changeLanguage('ka')}>Geo</button>
                <button onClick={() => changeLanguage('en')}>Eng</button>
            </div>
            <div className="hed-nav">
        <Logo/>
            <Nav customClass="headerNav"
                        language={language}
                        langs={langs} />
            </div>
        </header>
    );
}