import {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import {api} from '../../global/services/api'
import {SimilarProducts} from './components';
import {LanguageContext} from "../../services/contexts/LanguageContext";

export function ProductDetails() {
    const [ product, setProduct] = useState({})
    const {language, langs} = useContext(LanguageContext)
    const [similarProducts, setSimilarProducs] = useState([])
    const { prID } = useParams();
    useEffect(() => {
        async function fetchData() {
            const apiData = await api._get(`https://fakestoreapi.com/products/${prID}`)
            if(apiData.status === 200 ){
                setProduct(apiData.data)
            }
        }
/*async function fetchData () {
    fetch(`https://fakestoreapi.com/products/${prID}`)
        .then((res) =>res.json())
        .then((json) => {
          setProduct(json)
        })
}*/
        fetchData()
    },[prID])  // TODO რაღაც ცვლადის შეცვლას უსმენს და შეუძლია თავიდან გაიაროს ანუ ჩაიტვირთოს . ელემენტარულად ჩავუწერე  prID და მოხდა Similar Products ლინკზე დაჩერის დროს ჩატვირთვა შესაბამისი პროდუკტის
    useEffect(() => {
        async function fetchData() {
            const apiData = await api._get(`https://fakestoreapi.com/products?limit=3`)
            if(apiData.status === 200){
                setSimilarProducs(apiData.data)
            }
        }
        fetchData()
    },[])
    return (
        <div>
            <h1>{langs[language].pages.productDetails.title}</h1>
            <div className="product__item">
                <img src={product.image} alt={product.title}/>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <span>{product.price}</span>
            </div>
            <h2>Similar Products</h2>
            <div className="products">
                {similarProducts.length > 0 ?
                    similarProducts.map((product) => (
                   <SimilarProducts key={product.id} product={product} />
                ))
                    : <p>Loadin...</p>
                }
            </div>
        </div>
    )
}

// TODO გასაუბრებაზე კითხულობენ fetch - ით აკეთებ გაგზავნას თუ axios -თი , ორივე შეიძლება პრინციპში ერთიდაიგივეა