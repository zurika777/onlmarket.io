import logo from '../../images/reach-logo.png'
import {Link} from "react-router-dom";
export function Logo() {
    return (
        <div className="logo">

            <Link to="/" >
                <img src={logo} alt="logo"/>
            </Link>



        </div>
    )
}