import {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {FavoritesContext} from '../../../services/contexts/FavoritesContext';
import {CartContext} from '../../../services/contexts/CartContext';

export function Product (props) {

    const {product, onCart} = props;
    const {isFavorite, toggleFavorite } = useContext(FavoritesContext);
    const {isCart, toggleCart, getQuantityOfProductInCart, changeQuantityOfProductInCart} = useContext(CartContext);

    const [quantity, setQuantity] = useState(getQuantityOfProductInCart(product.id));

    const  changeQuantity = (e) => {
        let value = e.target.value; // TODO Свойство target возвращает элемент , в котором произошло событие
        if(value < 1 || value === "" || !parseInt(value) || parseInt(value) > 10){
            return;
        }

        changeQuantityOfProductInCart(product.id, value);
        setQuantity(value);
    }
    return (
        <div className="product__items">
            <img src={product.image} alt={product.title}/>
            <div className="products__icons">
            <FavoriteIcon
                sx={{ color: isFavorite(product.id) ? "red" : "b1b1b1"}}
            onClick={() => toggleFavorite(product.id)}
            />
            <ShoppingCartIcon
                sx={{ color: isCart(product.id) ? "green" :  "red" }}
            onClick={() => toggleCart(product.id)}
            />
            </div>
            {onCart ?
                <>
                <label htmlFor="quantity">Quantity:</label>
                <input type="number" value={quantity} onChange={changeQuantity}/>
                </>
                : null
            }
            <h3>{product.title}</h3>
            <span>{product.price}</span>
            <div className="pro">
                <Link to={`/product-details/${product.id}`}>Details</Link>
                <Link to={`/product-edit/${product.id}`}>Edit</Link>
            </div>
        </div>
    )
}

//  TODO Свойство target доступно только для чтения.