import {useContext} from "react";
import {LanguageContext} from "../../services/contexts/LanguageContext";

export  function Home() {
    const {language, langs} = useContext(LanguageContext) //TODO  LanguageContext -იდან useContext -ს მეშვეობით ამოღება ცვლადების language, langs
    return (
        <div>
            <h1>{langs[language].pages.home.title}</h1>
        </div>
    )
}