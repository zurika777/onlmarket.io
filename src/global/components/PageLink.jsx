import {Link} from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';  // TODO icon -ების ბიბლიოთეკა ყენდება ამ ლინკიდან npm install @mui/icons-material
export function PageLink(props) {
    const {to, name, icon} = props;
    return (
        <Link to={to}>
            {
                icon === 'favorites' ?
                    <FavoriteIcon color="secondary"/> :
                icon === 'cart' ?
                    <ShoppingCartIcon/>
                : name
            }



        </Link>

    )
        }