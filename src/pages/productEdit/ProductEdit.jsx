import {useState, useEffect , useContext} from 'react';
import {LanguageContext} from "../../services/contexts/LanguageContext";
import {useParams} from 'react-router-dom';
import {api} from "../../global/services/api";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

export function ProductEdit() {
    const {language, langs} = useContext(LanguageContext);
    const translate = langs[language].pages.productEdit;
    const { prID } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [initialValues , setInitialValues] = useState({
        title: '',
        price: '',
        description: '',
        image: '',
        category: ''
    });
    const validationSchema = Yup.object({ //TODO შექმენი  Yup ობიექტი, გამოიძახე ეს ფუნქცია
        title: Yup.string().required('აუცილებელია'),// TODO რომელშიც  title არის სტრინგი required არის აუცილებელი და იმ შემთხვევაში თუ required არის ფალსე ანუ დაგავიწყდა შეტანა არაფერი არ ჩაწერე მაში მასჰინ ამოგიგდებს "required" ანუ "აუცილებელია" ტექსტს
        price: Yup.number().required('Required'),
        description: Yup.string().required('Required'),
        image: Yup.string().required('Required'),
        category: Yup.string().required('Required'),

    })
    const ProductAdd = async (values) => {
        values.price=price;
        const apiData = await api._put(`https://fakestoreapi.com/products/${prID}`, values);
        if (apiData.status === 200) {
            alert('Product updates successfully');
        }
    };


    const  changeTitle = (e) => {
        let value = e.target.value;
        if(value.length <= 20 ){
            setTitle(value)
        }
    }

    const  changePrice= (e) => {
        let value = e.target.value;
        value = value.replace(/[^\d.]/g, '');
        let dotCount = value.split('.');
        if (dotCount.length > 2 ||      //TODO თუ არის 2 ზე მეტი და ასე შემდეგ
            (dotCount[1] && dotCount[1].length > 2) ||
            (dotCount[0] && parseInt(dotCount[0]) > 10000)    //TODO parseInt გადაგვყავს იმნტეგერში
        ){
            return;                // მაშინ აღარ შეასრულო და გადი
        }
        setPrice(value);
    };



    useEffect(() => {
        const fetchData = async () => {
            const apiData = await api._get(`https://fakestoreapi.com/products/${prID}`);
            if(apiData.status === 200){
                setInitialValues(apiData.data)
            }
        }
        fetchData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
        <div >
            <h1>{translate.title}</h1>
            <div className="product-edit">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={ProductAdd}
                    enableReinitialize={true}
                >
                    <Form id="formadd">
                        <div className="form-element">
                            <label htmlFor="title">Title</label>
                            <Field type="text" name="title" id="title"  value={title} onChange={changeTitle}/>
                            <ErrorMessage component="label" className="error" name="title"/>
                        </div>
                        <div className="form-element">
                            <label htmlFor="price">Price</label>
                            <Field type="text" name="price" id="price" value={price} onChange={changePrice}/>
                            <ErrorMessage component="label" className="error" name="price"/>
                        </div>
                        <div className="form-element">
                            <label htmlFor="description">Description</label>
                            <Field type="text" name="description" id="description"/>
                            <ErrorMessage component="label" className="error" name="description"/>
                        </div>
                        <div className="form-element">
                            <label htmlFor="image">Image</label>
                            <Field type="text" name="image" id="image"/>
                            <ErrorMessage component="label" className="error" name="image"/>
                        </div>
                        <div className="form-element">
                            <label htmlFor="category">Category</label>
                            <Field type="text" name="category" id="category"/>
                            <ErrorMessage component="label" className="error" name="category"/>
                        </div>
                        <div className="form-element">
                            <button type="submit">Submit</button>
                        </div>

                    </Form>
                </Formik>
            </div>
        </div>
    )
}

// TODO ErrorMessage არის შეცდომის ბლოკი რომელიც გამოდის მაშინ როდესაც შეცდომა არის მიბმული კონკრეტულად სახელზე სახელზე