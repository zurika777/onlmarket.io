import {useContext} from "react";
import {LanguageContext} from "../../services/contexts/LanguageContext";
export  function About() {
    const {language, langs} = useContext(LanguageContext)
    return (
        <div>
            <h1>{langs[language].pages.about.title}</h1>
        </div>
    )
}