import {useState, useEffect, useContext} from 'react';
import {api} from "../../global/services/api";
import {CONFIG} from "../../services/contexts/config";
import {CartContext} from "../../services/contexts/CartContext";
import {LanguageContext} from "../../services/contexts/LanguageContext";

export function CheckOut() {
    const [data, setData] = useState({
        products: [],
        total: 0,
    });
    const {language, langs} = useContext(LanguageContext);
    const {cart} = useContext(CartContext);
   // console.log([], {}, 1, "1", true, false, null, undefined, NaN) //Not-A-Number.
    useEffect(() => {
        const fechData = async () => {
            const result = await api._get(`${CONFIG.API_PRODUCTS}`);
            if (result.status === 200){
               let processedData = {...data};
               let products = result.data.filter((product) => {
                   let index = cart.findIndex((item) => item.productId === product.id);
                  return index !== -1;
                });
                processedData.products = products.map((product) => {
                    let productQuantity = cart.find((item) => item.productId === product.id).quantity;

                    processedData.total += productQuantity * product.price;

                    product.quantity = productQuantity;
                    product.sumPrice = product.price * productQuantity;
                   return product;
               })
               setData(processedData)
            }
        }
        fechData();
    },[cart]);
    return (
        <div>
            <h1>{langs[language].pages.checkOut.title}</h1>
            {data.products.length > 0 ? data.products.map((product) => {
                return (
                    <div key={product.id} style={
                        {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        }
                    }>
                        <p>{product.title}</p>
                        <p>{product.quantity}</p>
                        <p>{product.price}</p>
                        <p>{product.sumPrice}</p>
                    </div>
                )
            }
            ) : <p>{langs[language].pages.empty.title}</p>
            }
            <p>{langs[language].pages.total.title} : {data.total}</p>
        </div>
    )
}


//TODO  console.log([], {}, 1, "1", true, false, null, undefined, NaN)
                    //[ერეი], {ობიექტი}, 1ინტეგერი, "1"სტრინგი, trueბულეან, falseბულეან, nullნული, undefined, NaNვერიპოვა ციფრიი??ეს გადაამოწმე