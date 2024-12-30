import {createContext, useState , useEffect} from "react"
import {storage} from '../storage';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({children}) => {
    const [favorites, setFavorites] = useState(
        storage.exists('favorites') ? storage.getJson('favorites'): []);

    const toggleFavorite = (id) => {
        let newFavorites = [...favorites];
        let index = newFavorites.findIndex((item) => item === id);
        if (index > -1) {
            newFavorites.splice(index, 1); //TODO Метод splice()добавляет и/или удаляет элементы массива. Метод splice()перезаписывает исходный массив.
                //TODO splice ამ შემთხვევაში ერთიცალი ამოაგდე რიგში მდგომი
        } else {
            newFavorites.push(id); //TODO Метод push()добавляет новые элементы в конец массива.
        }
        setFavorites(newFavorites); //TODO გააკეთე აპდეითი ლოკალური ცვლადის
        storage.set('favorites', JSON.stringify(newFavorites)); //TODO და გააკეთე აპდეითი ჩვენი storage სტორიგის
    };

    const isFavorite = (id) => {
        let index = favorites.findIndex((item) => item === id); //TODO  findIndex აბრუნებს ან რიგითობას ან -1 - თს
        //console.log(index)
        return index > -1;
    };

useEffect(() => {

    if (storage.exists('favorites')) {
        setFavorites(
            storage.getJson('favorites')
        );
    }
},[]);
    return (
        <FavoritesContext.Provider value={{
            favorites,
            isFavorite,
               toggleFavorite

        }}>
            {children}
        </FavoritesContext.Provider>
    )
};
// TODO Метод splice()добавляет и/или удаляет элементы массива.
//  Метод splice()перезаписывает исходный массив.