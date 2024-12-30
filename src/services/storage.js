const get = (key) => {
    return localStorage.getItem(key);
};
const exists = (key) => {
    return get(key) !== null;
};
const length = () => {
    return localStorage.lenght;
};
const getJson = (key) => {
    return JSON.parse(get(key)); //TODO JSON.parse()для преобразования текста в объект JavaScript:
};
const set = (key, val) => {
    return localStorage.setItem(key, val);
};
const remove = (key) => {
    return localStorage.removeItem(key);
};
const clear = () => {
    return localStorage.clear();
};

export const storage = {
    get,
    exists,
    length,
    getJson,
    set,
    remove,
    clear
};
// TODO Используйте функцию JavaScript JSON.parse()для преобразования текста в объект JavaScript:
//  Обычно JSON используется для обмена данными с/на веб-сервер.