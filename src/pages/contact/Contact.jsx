import {useContext} from "react";
import {LanguageContext} from "../../services/contexts/LanguageContext";
export function Contact() {
    const {language, langs} = useContext(LanguageContext)
    return (
        <div>
            <h1>{langs[language].pages.contact.title}</h1>
        </div>
    )
}