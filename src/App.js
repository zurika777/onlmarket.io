import {BrowserRouter, Routes, Route} from "react-router-dom";
import {routesMap} from './global/configs/routes';
import {Header, Footer} from './pages';
import {LanguageProvider} from "./services/contexts/";
import {FavoritesProvider} from "./services/contexts/";
import {CartProvider} from "./services/contexts/";

function App() {

  return (
      <div className="container">
    <BrowserRouter>
        <LanguageProvider>
            <FavoritesProvider>
                <CartProvider>
       <Header />
            <Routes>
              {routesMap.map((route, index) =>(
                  <Route key={`routes-list-${index}`} path={route.path} element={route.element} />
              ))}
            </Routes>
       <Footer />
                </CartProvider>
            </FavoritesProvider>
        </LanguageProvider>
    </BrowserRouter>
      </div>
    )
}

 export default App;


// TODO  import {Home} from './pages'; როდესაც pages -ში ვქმნით index.js
//  და შიგვინთ ვაკეთებთ ესპორტს  export {Home} from './Home';
//  მაშინ აღარ არის საჭირო მზგავსი რამის გაწერა import {Home} from './home/Home';
//  საკმარისია import {Home} from './pages'; და ამოიღებს თვითონ



// TODO კომპონენტი რეაქტში იწერება დიდი ასოთი


// TODO const TestComponent = () => {}
//  export default TestComponent იგივეა
// TODO <BrowserRouter> сохраняет текущее местоположение в адресной строке браузера, используя чистые URL-адреса, и выполняет навигацию, используя встроенный стек истории браузера.

// TODO react არის single site aplication
// TODO Route ლინკი და Routes ლინკები


// TODO flex-wrap: wrap;    ვაძლევთ უფლებას გადავიდეს შემდეგ სტროფზე

// TODO
//  list-style-type: none;  რომ გააქროს <li> - ს წერტილები*/
// TODO .length - რაოდენობას დათვლის -სიგრძე
// TODO for -ში i ნიშნავს იგივე index -ს
// TODO return  -დაბრუნების დროს ფუნქცია წყდება მთავრდება
// TODO document არის მთლიანად Html - ი რაც იქმნება ან რასაც შენ ქმნი
// TODO Date(); თარიღის ობიექტი და არა სტრინგი
// TODO indexOf ნეით მეთოდი
// TODO slice ნეით მეთოდი
// TODO filter ნეით მეთოდი - ფილტრაციის ფუნქცია
// TODO value მნიშვნელობა -სახელი
// TODO key  რიგის ნომერი -  რიგითობა
// TODO map უვლის თითოეულ ელემენტს დაახლოებით იგივე for ია
// TODO Метод getElementById()возвращает элемент с указанным значением.
// TODO innerText задает или возвращает текстовое содержимое элемента.
// TODO innerHTML Получить HTML-контент элемента с id ანიჭებს ან აბრუნებს HTML ელემენტის  შინაარსს (შიდა HTML).
// TODO appendChild() добавляет узел (элемент) в качестве последнего дочернего элемента элемента.
// TODO let demo = document.getElementById("demo") ანუ ვიპოვოთ ელემენტი დასახელებით "demo"
// TODO entrie ჩანაწერი-ჩანაწერები
// TODO DOM: Document, Object, Model არის ინტერფეისი სრული რუკა ჩვენი ელემენტების
// TODO BOM: Browser, Object, Model არის window არის ის ობიექტი რომელიც შეიცავს თვისებას ბრაუზერზე window და document არ არსებობს ჯავასკ რიპტში
// TODO თიოეულ ელემენტს ქვია ნოდი
// TODO თითო ელემეტი არის ობიექტი იმიტომ რომ შეიცავს ძალიან ბევრ თვისებებს
// TODO ${} სინტაქსისია გამოყოფის
// TODO ნეით არის ფუნქცია შემოკლებული
// TODO Метод setAttribute()устанавливает новое значение атрибута.
//  let text = "Hello World!";
// TODO Object არის თით ელემენტი არის ობიექტი და შეიცავს საკუთარ თავზე ინფორმაციას სადაც შედის თვისებებიც ივენთებიც, მეთოდებიც
// TODO Model ნიშნავს რომ ობიექტის მოდელით მუშაობს
// TODO google profiler ეს არის გამოაქვს მაგალითები ექსტენშენია programis
// TODO get წამოიღე რომელიღაცა კეი
// TODO exists თუ არსებოსბ ეს კიი წამოიღე
// TODO getJSON იგივე get - ია უბრალოდ ჯეისონის ფორმატში გადაგვაქვს ეს მონაცემები
// TODO set არის რაღაცის ჩადეება- დამატება  მაგ LocalStorage - ში
// TODO remove არის წაშლა
// TODO clear მთლიანად გასუფთავება
// TODO e.stopPropagation() // აჩერებს პილველ მოქმედებაზე მაგ : თყუ ათჯერ დააჭირა კლიკს არ დაიდება ათჯერ ზედიზედ ერთიდაიგივე პოსტი
// TODO e.preventDefault() - это метод объекта события JavaScript, который используется для отмены действия браузера по умолчанию, связанного с определенным событием. Например, если вы хотите отменить переход по ссылке при клике на нее, вы можете использовать preventDefault()
// TODO (e) არის event შემოკლებულად // ცვლადი
// TODO JSON.stringify(), чтобы преобразовать его в строку. სტრიქონად. *
//     Метод push()добавляет новые элементы в конец массива.
//     Метод push()изменяет длину массива.
//     Метод push()возвращает новую длину.
//     Метод prepend() вставляет указанное содержимое в начало выбранных элементов.
//
//     TODO function createElelemt() {  ფუნქციის სახელი შექმენი ელემენტი
//      let element = ducument.createElement("p"); ცვლადი უდრის შექმნას ელემენტი p ანუ პარაგრაფი
//      element.innerHTML = text;  ვანიჭებთ ამ ელემენტს text - ს ანუ "Hello World!" -ს
//      demo.appendChild(element);''
//
// TODO createElelemt(); ქმნის ელემენტს
// TODO value - saxeli Свойство value устанавливает или возвращает значение атрибута value текстового поля.
// TODO function createElement(cvladi, elementi) {
//     elementi  პარაგრაფი p ან button
//     createElement('მაკა' , 'p')
//     item  - ნივთი.  არის უბრალოდ სახელი მეტი არაფრი

// Todo Метод shift()удаляет первый элемент массива.
//  Метод shift()изменяет исходный массив.
//  Метод shift()возвращает сдвинутый элемент.
// TODO პროგრამირებაში ყოველთვის დინამიკას აქვს უპირატესობა ვიდრე სტატიკას
