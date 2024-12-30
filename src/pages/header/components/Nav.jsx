import {useContext} from "react";
import {LanguageContext} from "../../../services/contexts/LanguageContext";
import {PageLink} from "../../../global/components/PageLink";

export  function Nav() {
    const {language, langs} = useContext(LanguageContext)
     // TODO props обозначает свойства.

    const links =[
        {to: '/', name: langs[language].pages.home.title},
        {to: '/about', name: langs[language].pages.about.title},
        {to: '/contact', name: langs[language].pages.contact.title},
        {to: '/products', name: langs[language].pages.products.title},
        {to: '/product-add', name: langs[language].pages.productAdd.title},
        {to: '/checkOut', name: langs[language].pages.checkOut.title},
        {to: '/exssample', name: langs[language].pages.exssample.title},
        {to: '/favorites', name: '', icon: 'favorites'},
        {to: '/cart', name: '', icon: 'cart'},


    ];
    return (
        <div className='navigation'>
            {links.map((link, index) => (
                <PageLink
                    to={link.to}
                    name={link.name}
                    icon={link.icon}
                    key={index}

                />
            ))}
        </div>
    )
}

            /* <ul>
                <li><Link to="/" className={(!location.pathname || location.pathname === '/') ?
                    'active' : ''}>
                    {langs[language].pages.home.title}
                </Link>
                </li>
                <li><Link to="/about" className={location.pathname === '/about' ?
                    'active' : ''}>
                    {langs[language].pages.about.title}
                </Link>
                </li>
                <li><Link to="/contact" className={location.pathname === '/contact' ?
                    'active' : ''}>
                    {langs[language].pages.contact.title}
                </Link>
                </li>
                    <li><Link to="/products" className={location.pathname === '/products' ?
                    'active' : ''}>
                        {langs[language].pages.products.title}
                </Link>
                </li>
                <li><Link to="/product-Add" className={location.pathname === '/product-Add' ?
                    'active' : ''}>
                    {langs[language].pages.productAdd.title}
                </Link>
                </li>
                <li><Link to="/favorites" className={location.pathname === '/favorites' ?
                    'active' : ''}>
                    {langs[language].pages.favorites.title} <FavoriteIcon/>
                </Link>
                </li>

            </ul>*/

// TODO useLocation სად ვიმყოფწბით იმის გაგება ანუ active რომელ ლინკზე

// TODO <li><Link to="/" className={(!location.pathname || location.pathname === '/') ?
//                     'active' : ''}> !თუ არ არის არაფერი ||ან უდრის ===/ მაშნ აქტივ , სვა შემთხვევაში დატოვე ცარიელი
//                     Home  pathname აბრუნებს ლინკის სათაურებს
//                 </Link>