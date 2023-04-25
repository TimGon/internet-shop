import axios from "axios";

const urlCategory = 'http://localhost/category.php';
const urlProducts = 'http://localhost/product.php';
const urlCateg = 'http://localhost/checkCategory.php';
const urlProd = 'http://localhost/checkProduct.php';

const urlCreate = 'http://localhost/createCateg.php';

const urlDel = 'http://localhost/delCateg.php';
// const urlDelTwo = 'http://localhost/checkProduct.php';

const urlUpd = 'http://localhost/updateCateg.php'

export const getCategory = async (category) => {
    const res = await axios.get(urlCategory)
    category(res.data);
}

export const getProducts = async (product) => {
    const res = await axios.get(urlProducts)
    product(res.data)
}

export const getProduct = async (val, setProduct, setCategory) => {
    if(val) {
        const fData = new FormData();
        fData.append('nameUrl', val);
        const resOne = await axios.post(urlCateg, fData);
        const resTwo = await axios.post(urlProd, fData);
        if(resOne.status === 200 && resTwo.status === 200) {
            setCategory(resOne.data);
            setProduct(resTwo.data);
            console.log('result:',resOne.data, resTwo.data);
            console.log(setProduct(resTwo.data))
        }
    }
}

export const createItem = async (title, categImg, setName, setCateg, state) => {
    const formCreate = new FormData();
    formCreate.append('title_product', title);
    formCreate.append('nameImg', categImg);
    const resCateg = await axios.post(urlCreate, formCreate);
    if(resCateg.status === 200) {
        setName('');
        setCateg('');
        state(true);
        console.log(resCateg, 'УСПЕХ!')
    }
}

export const delItem = async (id, cond) => {
    const data = new FormData();
    data.append('id', id)
    const resCategDel = await axios.post(urlDel, data );
    if(resCategDel.status === 200 ) {
        cond(true);
        console.log(resCategDel)
    }
}

export const updateItem = async (id) => {
    const idData = new FormData();
    idData.append('idUpd', id);
    const resCategUpd = await axios.post(urlUpd, idData);
    if(resCategUpd.status === 200 ) {
        console.log(resCategUpd)
    }
}