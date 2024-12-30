import {createContext, useState} from "react"
import {storage} from '../storage';


export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const isCart = (productId) => {
        let index = cart.findIndex(item => item.productId === productId); //TODO  findIndex აბრუნებს ან რიგითობას ან -1 - თს
        //console.log(index)
        return index > -1;

    };

const [cart, setCart] = useState(
    storage.exists('cart') ? storage.getJson('cart'): [] //TODO თუ კალათა არსებობს ამოიღეს ეს კალათა თუ არა და ცარიელი [] ერეია
);
const processCart = (data) => {
    storage.set('cart',JSON.stringify(data));
    setCart(data);
};

    //------------------------------------------------------------------------//

    const toggleCart = (productId) => {
        /*  //1
            if (storage.exists('cart')) { //TODO storage.exists ფუნქცია  თუ "არსებოსბს cart"
                  let cart = storage.getJson('cart'); //TODO წამოიღე ეს ინფორმაცია storage -დან getJson ფორმატში და getJson არის JSON.parse(get(key) რომელსაც ტექსტი გადაყავს ობიექტში!
                  let index = cart.findIndex(item => item.productId === productId); //TODO თუ ეს პროდუქტი არის სიაში LOCAL STORAGE -ში
                  if (index > -1) {  //TODO  index === -1   ანუ არ არსებობს და  index > -1 არსებობს იმიტომ რომ თუ არიუს ობიექტი სიაში მაშინ  findIndex დააბრუნებს 1 -იანს
                      cart.splice(index, 1); //TODO თუმეტია მაშინ უნდა ამოვაგდოთ კალათიდან index -ის მიხედვით

                      console.log(cart);
                      console.log(index);
                  } else {
                  cart.push({productId: productId, quantity: 1})
                      console.log(cart, 'daseta daamata rac aris')
                  }
                  storage.set('cart', JSON.stringify(cart)); //TODO დავსეტოთ ჩვენი cart -ი
                  console.log(storage, "am shemtxvevashi ra xdeba?")
              }else {

                  storage.set('cart' , JSON.stringify([{productId: productId, quantity: 1}])); //TODO როდესაც არ არსებობს უნდა დავსეტოთ ახალი პროდუქტით ანუ კლიკის დროს დავამატოთ
                  console.log(storage, 'ელსეა მეორე')
              }
         */
       /* if (storage.exists('cart')) {
            let cart = storage.getJson('cart'); // 1 შეამოწმოს ლოკალსტორი cart - ში თუ არსებობს რამე და თუ არ არსებობს გადადის 2. ზე
            let index = cart.findIndex(item => item.productId === productId); //3. თუ არსებობს მაგ :  productId 1
            if (index > -1) { // 4. და index მეტია -1 ზე
                cart.splice(index, 1); // 5. მაშინ ამოაგდე წაშალე კალათიდან productId 1 იმ შემთხვევაში თუ კლიკი არის იმ აიდზე რომელიც დამატებულია და გვინდა წასშლა
            } else {
                cart.push({productId: productId, quantity: 1}); //6. თუ არის კალათაში მაგრამ productId არის სხვა მაშინ დაამატე productId
            }
            storage.set('cart', JSON.stringify(cart)) // 7. და გადაიყვანე ობიექტი ტექსტში . ასევე გავიგოთ შემდგომში რომ ეს აიდი პროდუცტი უკვე არსებობს

        } else {
            storage.set('cart', JSON.stringify([{productId: productId, quantity: 1}])) // 2. თუ არ არის კალათაში არაფერი დაემატება პროდუქტი

        }
    }*/
        if (storage.exists('cart')) {
            let cart = storage.getJson('cart'); // 1. შეამოწმოს ლოკალსტორი cart - ში თუ არსებობს რამე და თუ არ არსებობს გადადის 2. ზე
            let index = cart.findIndex(item => item.productId === productId); //3. თუ არსებობს მაგ :  productId 1
            if (index > -1) { // 4. და index მეტია -1 ზე
                cart.splice(index, 1); // 5. მაშინ ამოაგდე წაშალე კალათიდან productId 1 იმ შემთხვევაში თუ კლიკი არის იმ აიდზე რომელიც დამატებულია და გვინდა წასშლა
            } else {
                cart.push({productId: productId, quantity: 1}); //6. თუ არის კალათაში მაგრამ productId არის სხვა მაშინ დაამატე productId
            }
           // storage.set('cart', JSON.stringify(cart)) // 7. და გადაიყვანე ობიექტი ტექსტში . ასევე გავიგოთ შემდგომში რომ ეს აიდი პროდუცტი უკვე არსებობს
            processCart(cart);
        } else {
           // storage.set('cart', JSON.stringify([{productId: productId, quantity: 1}])) // 2. თუ არ არის კალათაში არაფერი დაემატება პროდუქტი
            processCart([{productId: productId, quantity: 1}])
        }
    }
    const getQuantityOfProductInCart = (productId) => { // 1. უდრის productId
    let index = cart.findIndex((item) => item.productId === productId);
    if (index > -1 ){
        return  cart[index].quantity;
        console.log(cart[index].quantity)
    } else {
        return 1;
         }
    }
    const changeQuantityOfProductInCart = (productId, quantity) => {
        let copyCart = [...cart];
        let index = copyCart.findIndex((item) => item.productId === productId);
        copyCart[index].quantity = parseInt(quantity);
        processCart(copyCart);
    }
    return (
        <CartContext.Provider value={{
            cart,
            isCart,
            toggleCart,
            getQuantityOfProductInCart,
            changeQuantityOfProductInCart
        }}>
            {children}
        </CartContext.Provider>
    )
};
//  TODO Метод splice()добавляет и/или удаляет элементы массива.
//   Метод splice()перезаписывает исходный массив.
//  TODO quantity რაოდენობა
//  TODO JSON.stringify(). Преобразуйте объект в строку JavaScript
//  TODO Метод findIndex()возвращает -1, если совпадений не найдено. მაგრამ თუ იპოვა მაშინ 1 გამოდის
