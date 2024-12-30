import {useState, useEffect, useContext} from 'react'  // TODO 2 ჰუკი  useState, useEffect
import {Product, Filters} from "./components";
import {Categories} from '../../global/components'
import {api} from '../../global/services/api'
import {CONFIG} from "../../services/contexts/config";
import {Loader} from "../../global/components"
import {LanguageContext} from "../../services/contexts/LanguageContext";
import {useParams, useLocation, useNavigate} from 'react-router-dom'

export function Products() {
    let  location = useLocation();
    let navigate = useNavigate();
    const {category} = useParams();
    //
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(1); //TODO default მნიშვნელბაა 1 - იანი
    const {language, langs} = useContext(LanguageContext);
    const [sort, setSort] = useState('asc');
    //
    function changeLimit () {
        let newLimit = limit +1;
        setLimit(newLimit);
        navigate ({
            pathname: location.pathname,
            search: `?limit=${newLimit}&sort=${sort}` //TODO ცვლადები იქწერება ამ ფორმატშ ამ შემთხვევაში ${} //TODO ასე ვაწვდი URL - ს ?limit=${newLimit}  ცვლადს
        });
    }
    function changeSort () {
        let newSort = sort === 'asc' ? 'desc' : 'asc'; //TODO if - ის შემოკლებული მაგ: თუ sort === 'asc' newSort უნდა იყოს  desc თუ არა და newSort უნდა იყოს asc
        setSort(newSort);
        navigate({
            pathname: location.pathname,
            search: `?limit=${limit}&sort=${newSort}`
        });
    }
    //
    useEffect(() => {
        function getQuery () {
            let localLimit = limit;
            let localSort = sort;
            // ?limit=avoooeee&sort=desc //TODO ეს არუნდა გატარდეს იდეაში
            let query = location.search.replace('?',''); // TODO replace მოვაშოროთ კითხვის ნიშანი -  ? ან სიცარიელე  //TODO Метод split() разбивает строку на массив подстрок. ამ შემხვევაში ყოფს ორ ნაწილად:  აქამდე და & ამის შემდეგ მაგ: არის ასე რაგაცა&მეორერაგაცა დაიყოფა ასე ['რაგაცა', 'მეორერაგაცა' ]  ჯავასკრიპტ
            //limit=avoooeee&sort=desc //TODO მოვაშორეთ კითხვის ნიშანი
            query = query.split('&');
            //TODO დავყავით ['limit=sd', 'sort=asc']
            query = query.filter((item) => item.includes('limit') || item.includes('sort'));
            let limitIndex = query.findIndex((item) => item.includes('limit'));
            // 0 TODO ვამოწმებთ 0 ია თ 1
            let sortIndex = query.findIndex((item) => item.includes('sort'));

            if (limitIndex > -1){
                let limitArr = query[limitIndex].split('=');

                let limitInt = parseInt(limitArr[1]);
                if (limitInt) {
                    setLimit(limitInt)
                    localLimit = limitInt;
                }
            }
            if (sortIndex > -1) {
                let sortArr =query[sortIndex].split('=');
                if (sortArr[1] === 'asc' || sortArr[1] === 'desc') {
                setSort(sortArr[1]);
                    localSort = sortArr[1];
                }
            }
            return `?limit=${localLimit}&sort=${localSort}`
        }
        getQuery();
        async function fetchData () {     /* const fetchData = async () =>{*/  //TODO ძველი ვარიანტი
            let filteredQuery = getQuery()
            let catUrl = ``;
            if (category) {
                catUrl = `/category/${category}`;
            }

            const apiData = await api._get(`${CONFIG.API_PRODUCTS}${catUrl}${filteredQuery}`);
            if(apiData.status === 200){ // TODO status რის თუ მოდის ინფორმაცია მაგ.შ არის 200
                setProducts(apiData.data)
            }
        }
        fetchData()
    }, [category, limit, sort, location.search]);
    return (
        <div className="about">
            <div>
                <h1>{langs[language].pages.products.title}</h1>
            </div>
                <div className="about__inner">
                    <div className="category">
                        <Categories/>
                    </div>
                    <div className="about__content">

                        <Filters limit={limit}
                                 sort={sort}
                                 changeLimit={changeLimit}
                                 changeSort={changeSort}
                        />
                        <div className="artickles__cat">
                            {products.length > 0 ? products.map((product) => (
                                    <Product  key={product.id} product={product} onCart={false}/>
                                ))
                                : <Loader/>
                            }
                        </div>
                    </div>
                </div>
        </div>
    )
}
//TODO Метод replace()ищет в строке значение или регулярное выражение. ჯავასკრიპტ


//TODO parseInt ციფრში გადაყვანა
//TODO findIndex მოგვცემს რიგითობას 0 ან 1 თს  თუ არ მოიპოვა მაშინ -1 -ს ჯავასკრიპტ

// TODO  click არის ცვლადი ჩვენი შექმნილი.
//  setClick არის ფუნქცია რომელიც შეცვლის ამ კლიკს
//  React useState Hook позволяет нам отслеживать состояние функционального компонента. Состояние обычно относится к данным или свойствам, которые необходимо отслеживать в приложении.
//  useState принимает начальное состояние и возвращает два значения: // Текущее состояние. // Функция, которая обновляет состояние.
//  useEffect запускается при каждом рендере. Это означает, что при изменении счетчика происходит рендеринг, который запускает другой эффект.
//  useEffect принимает два аргумента. Второй аргумент является необязательным.
// TODO Hook არის 6 თუ 8

/*
import { useState, useEffect } from "react"
import axios from "axios"
import {Loader} from '../../global/components/Loader'
export function Products () {
    const [products, setProducts] = useState([]);
    const [backUp, setBackup] = useState([])
    const [limit, setLimit] = useState (5)
        const action = () => {
            if (products.length > 0){
                let newProducts = [...products]
                newProducts.shift()
                setProducts(newProducts)
            }
        }
        const reset = () => {
        setProducts(backUp)
        }
        const addLimit = () => {
        setLimit(limit +5 )
        }
    useEffect(() => {
        const fetchData = async() => {
            const apiData = await axios.get(`https://fakestoreapi.com/products?limit=${limit}`)
            if(apiData.status === 200){
                setProducts(apiData.data)
                setBackup(apiData.data)
            }
        }
        fetchData()
    }, [limit]);

return (
    <div className="artickles__cat">

        {products.length > 0 ?
            products.map((product) => (
                <div className="product-item" key={product.id}>
                    <img src={product.image} alt={product.title}/>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <span>{product.price}</span>
                </div>
            ))
            : < Loader />

        }
        <div className="buttons">
            <div>
                <button onClick={action}> Action</button>
                <button onClick={reset}> reset</button>

            </div>
            <div>
                <button onClick={addLimit}> Click Load {limit}</button>
            </div>

        </div>

    </div>

)
}*/
