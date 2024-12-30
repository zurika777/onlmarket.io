import {LanguageContext} from "../../services/contexts/LanguageContext";
import {useState, useEffect, useContext} from "react";
import {api} from "../../global/services/api";
import {CONFIG} from "../../services/contexts/config";
import {CartContext} from "../../services/contexts/CartContext";
import {Product} from "../products/components";
import {Loader} from "../../global/components";

export function Cart() {
    const {language, langs} = useContext(LanguageContext);
    const [data, setData] = useState([]);
    const {cart } = useContext(CartContext);

    useEffect(() => {
       //console.log(cart.length)
        const  fetchData = async () =>  {     /* const fetchData = async () =>{*/  //TODO ძველი ვარიანტი
            const apiData = await api._get(`${CONFIG.API_PRODUCTS}`);
            if(apiData.status === 200) { // TODO status რის თუ მოდის ინფორმაცია მაგ.შ არის 200
                let filterData = apiData.data.filter((product) => {
                    let index = cart.findIndex((item) => item.productId === product.id); // findIndex აბრუნებს -1 როდესაც item.productId === product.id -ს
                    if (index > -1) { //როდესაც არ არის ნაყიდი მაშინ ბრუნდება -1
                    return true;
                    } else {
                        return false;
                    }
                });
               // console.log(cart, filterData)
                setData(filterData);
            }
        }
        fetchData();
    }, [cart]); //TODO ამ ცვლადზე ორიენტირებული იყოს  useEffect -ტი
    return (
        <div>
            <h1>{langs[language].pages.cart.title}</h1>
            <div className="artickles__cat">
                {data.length > 0 ? data.map((product) => (
                        <Product  key={product.id} product={product} onCart={true}/>
                    ))
                    : <Loader/>
                }
            </div>
        </div>
    )
}


/*
import {LanguageContext} from "../../services/contexts/LanguageContext";
import {useState, useEffect, useContext} from "react";
import {api} from "../../global/services/api";
import {CONFIG} from "../../services/contexts/config";
import {CartContext} from "../../services/contexts/CartContext";
import {Product} from "../products/components";
import {Loader} from "../../global/components";

export function Cart() {
    const {language, langs} = useContext(LanguageContext);
    const [data, setData] = useState([]);
    const {cart} = useContext(CartContext);

    useEffect(() => {
if (cart.length === 0 ) return () => {};
        async function fetchData () {     /!* const fetchData = async () =>{*!/  //TODO ძველი ვარიანტი
            const apiData = await api._get(`${CONFIG.API_PRODUCTS}`);
            if(apiData.status === 200){ // TODO status რის თუ მოდის ინფორმაცია მაგ.შ არის 200
                let filteredData = apiData.data.filter((product) => {
                    let index = cart.findIndex((item) => item.productId === product.id);

                if (index > -1) {
                    return true;
                }else {
                    return false;
                }
                });
                setData(filteredData);
            }
        }
        fetchData()
    }, []);
    return (
        <div>
            <h1>{langs[language].pages.cart.title}</h1>
            <div className="artickles__cat">
                {data.length > 0 ? data.map((product) => (
                        <Product  key={product.id} product={product}/>
                    ))
                    : <Loader/>
                }
            </div>
        </div>
    )
}*/
