import axios from "axios";

export function _get (path) {
    return axios.get(path);
}
export function _post (path, data){
    return axios.post(path, data);
}
export function _put (path, data ){
    return axios.put(path, data);
}
export function _delete(path) {
    return axios.delete(path);
}

export const api = {
    _get,
    _post,
    _put,
    _delete
};

// TODO get ნიშნავს როდესაც გვჭირდება რამე დატის წამოღება
// TODO post რაღაც დატას ვაგზავნით სერრვერზე ,ძებნის დროს , ჩანაწერის შექმნის დროს
// TODO put იგზავნება როდესაც ვცდილობთ ჩვენი ჩანაწერის დაედითებას
// TODO delete იგზავნება როდესაც რამეს ვშლით