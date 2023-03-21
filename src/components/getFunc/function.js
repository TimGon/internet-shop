import axios from "axios";


const urlCategory = 'http://localhost/category.php';
const urlProducts = 'http://localhost/product.php';
const urlCateg = 'http://localhost/checkCategory.php';
const urlProd = 'http://localhost/checkProduct.php';

export const getCategory = async (category) => {
    const res = await axios.get(urlCategory)
    category(res.data);
}

export const getProducts = async (product) => {
    const res = await axios.get(urlProducts)
    product(res.data)
}

export const getProduct = async (val, setProduct, setCategory) => {
    const fData = new FormData();
    fData.append('nameUrl', val);
    const resOne = await axios.post(urlCateg, fData);
    const resTwo = await axios.post(urlProd, fData);
    if(resOne.status === 200 && resTwo.status === 200) {
        setCategory(resOne.data);
        setProduct(resTwo.data);
        console.log(resOne, resTwo)
    }

}