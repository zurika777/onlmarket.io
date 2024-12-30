import {useContext, useState} from "react";
import {LanguageContext} from "../../services/contexts/LanguageContext";
import {api} from "../../global/services/api";

export function ProductAdd() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const {language, langs} = useContext(LanguageContext);
    const translate = langs[language].pages.productAdd;

    const [error, setError] = useState(
        {
            title: '',
            price: '',
            description: ''
        });


    const  ChangeTitle = (e) => {
        let value = e.target.value;
        if(value.length <= 20 ){
            setTitle(value)
        }
    }

    const  ChangePrice= (e) => {
        let value = e.target.value;
        value = value.replace(/[^\d.]/g, '');
        let dotCount = value.split('.');
        if (dotCount.length > 2 ||      //TODO თუ არის 2 ზე მეტი და ასე შემდეგ
            (dotCount[1] && dotCount[1].length > 2) ||
            (dotCount[0] && parseInt(dotCount[0]) > 10000)    //TODO parseInt გადაგვყავს იმნტეგერში
        ){
          return;                // მაშინ აღარ შეასრულო და გადი
        }
        console.log(dotCount)
        setPrice(value);
    }

    const ChangeDescription = (e) => {
        let value = e.target.value;
        setDescription(value);
    }

    const cleanInputs = () => {
  setTitle('');
  setPrice(0);
  setDescription('');
    };

    const proccesErrors =(errorType) => {
        let newError ={ ...error};
        if(errorType === "title"){
            newError.title= "dasaxeleba aucilebelia"
        }else if(errorType === "price") {
            newError.price = "fasi aucilebelia";
        }else if(errorType === "description") {
            newError.description = "agcera aucilebelia";
        }else {
            newError.title = "";
            newError.price = "";
            newError.description = "";
        }
        setError(newError);
    }


    async function addProduct(e) { //TODO (e) არის event შემოკლებულად // ცვლადი
        e.preventDefault();
        if (title.length > 20){
            proccesErrors("title")
        }
       let postData = {
           title: title,
           price: price,
           description: description,
       };
        const apiPostData = await api._post('https://fakestoreapi.com/products', postData);
       if (apiPostData.status === 200){
            alert("chaitvirta");
           cleanInputs();
       }else {
           alert("ar chatvirtula")
       }

    }

    return (
            <div id="formadd">
                <h1>{translate.title}</h1>

            <form onSubmit={addProduct}>
                <div className="form-element">
                    <label htmlFor="title">{translate.producttitle}: </label>
                    <input type="text" id="title" name="title"
                           value={title}
                           onChange={ChangeTitle}
                    />
                    {error.title &&
                    <label className="error">
                        {error.title}
                    </label>
                    }
                </div>
                <div className="form-element">
                    <label htmlFor="price">{translate.price}: </label>
                    <input type="number" id="price" name="price" placeholder="0.00"
                           value={price}
                           onChange={ChangePrice}
                    />
                    {error.price &&
                    <label className="error">
                        {error.price}
                    </label>
                    }
                </div>
                <div className="form-element">
                    <label htmlFor="description">{translate.description}: </label>
                    <textarea id="description" name="description"

                              defaultValue={description}
                              onChange={ChangeDescription}
                    />
                    {error.description &&
                    <label className="error">
                        {error.description}
                    </label>
                    }

                </div>
                <div className="form-element">
                    <button type="submit">{translate.addProduct}</button>
                </div>
            </form>
            </div>
    );
}