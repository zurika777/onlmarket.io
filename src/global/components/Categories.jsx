import {useState, useEffect} from 'react'
import {Loader} from "./Loader";
import {Link} from 'react-router-dom'
import {api} from '../services/api'

export function Categories() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        async function fetchData() {
            const apiData = await api._get('https://fakestoreapi.com/products/categories')
        if(apiData.status === 200) {
            setCategories(apiData.data)
            }
        }
        fetchData()
    },[])
    return (

            <div>
            {categories.length > 0 ?
            categories.map((category, index) => (
                <Link to={`/products/${category}`} key={`category-link-${index}`}>
                    {category}
                </Link>
            )) :
                <Loader/>
            }
            </div>

    )
}