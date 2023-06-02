import axios from "axios";

const urlCategory = 'http://localhost/category.php';
const urlProducts = 'http://localhost/product.php';
const urlCateg = 'http://localhost/checkCategory.php';
const urlProd = 'http://localhost/checkProduct.php';

const urlCreate = 'http://localhost/createCateg.php';
const urlDel = 'http://localhost/delCateg.php';
const urlUpd = 'http://localhost/updateCateg.php';

const urlSearch = 'http://localhost/searchItem.php';

const urlOrder = 'http://localhost/getOrders.php';
const urlAddOrder = 'http://localhost/createOrder.php';
const urlCheckOrders = 'http://localhost/getOrder.php';
const urlUpdateOrder = 'http://localhost/updateOrder.php';
const urlDelOrder = 'http://localhost/delOrder.php';

const urlProdCreate = 'http://localhost/createProduct.php';
const urlProdDel = 'http://localhost/delProd.php';
const urlProdUpd = 'http://localhost/updateProd.php';

export const getCategory = async (category) => {
    const res = await axios.get(urlCategory)
    category(res.data);
}

export const getProducts = async (product) => {
    const res = await axios.get(urlProducts)
    product(res.data)
}

export const getProduct = async (val, setProduct, setCategory, setRes) => {
    if(val) {
        const fData = new FormData();
        fData.append('nameUrl', val);
        const resOne = await axios.post(urlCateg, fData);
        const resTwo = await axios.post(urlProd, fData);
        if(resOne.status === 200 && resTwo.status === 200) {
            setCategory(resOne.data);
            setProduct(resTwo.data);
            setRes(resTwo.data);
            console.log('result:',resOne.data, resTwo.data);
        }
    }
}

export const getOrder = async (setOrders) => {
    const resOrder = await axios.get(urlOrder);
    setOrders(resOrder.data);
}

export const getOrders = async (user, setOrders) => {
    if(user) {
        const ordersForm = new FormData();
        ordersForm.append('user', user);
        const resOrders = await axios.post(urlCheckOrders, ordersForm)
        if(resOrders.status === 200) {
            setOrders(resOrders.data);
            console.log('resultOrders:', resOrders.data);
        }
    }
}

export const searchItem = async (brand, category, setProduct) => {
    const formSearch = new FormData();
    formSearch.append('brand', brand);
    formSearch.append('category', category);
    const resItem = await axios.post(urlSearch, formSearch);
    if(resItem.status === 200) {
        console.log(resItem);
        setProduct(resItem.data);
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

export const updateItem = 
    async (id, title, categ, setTitle, setCateg, setActive, setState) => {
    const updItem = new FormData();
    updItem.append('idUpd', id);
    updItem.append('titles', title);
    updItem.append('categs', categ);
    const resCategUpd = await axios.post(urlUpd, updItem);
    if(resCategUpd.status === 200 ) {
        setTitle('')
        setCateg('')
        setActive(false);
        setState(true)
        console.log(resCategUpd)
    }
}

export const createOrder = 
    async (numberOrder, titleProd, nameClient, sumOrder, delivery, pay) => {
    const orderForm = new FormData();
    orderForm.append('numOrder', numberOrder);
    orderForm.append('titleProd', titleProd);
    orderForm.append('nameClient', nameClient);
    orderForm.append('sum', sumOrder);
    orderForm.append('delivery', delivery);
    orderForm.append('pay', pay);
    const resOrder = await axios.post(urlAddOrder, orderForm);
    if(resOrder.status === 200 ) {
        console.log(resOrder)
    }
}

export const updateOrder = 
    async (id, stateOrder, setStateOrder, setActive, setState) => 
    {
    const updItemOrder = new FormData();
    updItemOrder.append('idOrder', id);
    updItemOrder.append('stateOrder', stateOrder);
    updItemOrder.append('stateOrder', stateOrder);
    const resOrderUpd = await axios.post(urlUpdateOrder, updItemOrder);
    if(resOrderUpd.status === 200 ) {
        setStateOrder('')
        setActive(false);
        setState(true)
        console.log(resOrderUpd)
    }
}

export const delOrder = async (id, cond) => {
    const orderDel = new FormData();
    orderDel.append('idOrder', id)
    const resOrderDel = await axios.post(urlDelOrder, orderDel);
    if(resOrderDel.status === 200 ) {
        cond(true);
        console.log(resOrderDel)
    }
}

export const createProd = async (title, descr, cost, categ, brand, nameImg, setTitle, setDscr, setCost, setCateg, setBrand, setImg, state) => {
    const formProd = new FormData();
    formProd.append('title_product', title);
    formProd.append('dscr', descr);
    formProd.append('cost', cost);
    formProd.append('categ', categ);
    formProd.append('brand', brand);
    formProd.append('nameImg', nameImg);
    const resProd = await axios.post(urlProdCreate, formProd);
    if(resProd.status === 200) {
        setTitle('');
        setDscr('');
        setCost('');
        setCateg('');
        setBrand('');
        setImg('');
        state(true);
        console.log(resProd, 'УСПЕХ!')
    }
}

export const delProd = async (id, cond) => {
    const delForm = new FormData();
    delForm.append('idDel', id)
    const resProdDel = await axios.post(urlProdDel, delForm );
    if(resProdDel.status === 200 ) {
        cond(true);
        console.log(resProdDel)
    }
}

export const updateProd = 
    async (id, title, descr, cost, category, brand, nameImg, setTitle, setDscr, setCost, setCateg, setBrand, setImg, setActive, setState) =>
{
    const updProd = new FormData();
    updProd.append('idProd', id);
    updProd.append('titleProd', title);
    updProd.append('descrProd', descr);
    updProd.append('costProd', cost);
    updProd.append('categ', category);
    updProd.append('brandProd', brand);
    updProd.append('imgProd', nameImg);
    const resProdUpd = await axios.post(urlProdUpd, updProd);
    if(resProdUpd.status === 200 ) {
        setTitle('');
        setDscr('');
        setCost('');
        setCateg('');
        setBrand('');
        setImg('');
        setActive(false);
        setState(true)
        console.log(resProdUpd)
    }
}