import {LanguageContext} from "../../services/contexts/LanguageContext";
import {useState, useEffect, useContext} from "react";
import {api} from "../../global/services/api";
import {CONFIG} from "../../services/contexts/config";
import {FavoritesContext} from "../../services/contexts/FavoritesContext";
import {Product} from "../products/components";
import {Loader} from "../../global/components";

export function Favorites() {
    const {language, langs} = useContext(LanguageContext);
    const [data, setData] = useState([]);
    const {favorites } = useContext(FavoritesContext);

    useEffect(() => {

        async function fetchData () {     /* const fetchData = async () =>{*/  //TODO ძველი ვარიანტი
            const apiData = await api._get(`${CONFIG.API_PRODUCTS}`);
            if(apiData.status === 200){ // TODO status რის თუ მოდის ინფორმაცია მაგ.შ არის 200
                let filterData = apiData.data.filter((item) => favorites.includes(item.id));
                setData(filterData);
            }
        }
        fetchData()
    }, [favorites]);
    return (
        <div>
            <h1>{langs[language].pages.favorites.title}</h1>
            <div className="artickles__cat">
                {data.length > 0 ? data.map((product) => (
                        <Product  key={product.id} product={product}/>
                    ))
                    : <Loader/>
                }
            </div>
        </div>
    )
}