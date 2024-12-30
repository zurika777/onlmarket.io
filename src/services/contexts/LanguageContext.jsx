import {createContext, useState} from "react"
import {langs} from  '../../global/langs/langs'
export const LanguageContext = createContext(null);
export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState('ka') //TODO setLanguage არის ფუნქცია რომელიც ცვლის ცვლადს
    function changeLanguage(lang) {
        setLanguage(lang)
    }

    return (
        <LanguageContext.Provider value={{
            langs,
            language,
            changeLanguage
        }}>

            {children}
        </LanguageContext.Provider>
    )
}