import axios from "axios";
import { useEffect, useState } from "react";

const Admin = () => {
    const [category, setCategory] = useState(''),
          [product, setProduct] = useState(''),
          [stateGet, setStateGet] = useState(true);

    const urlCategory = 'http://localhost/category.php';
    const urlProduct = 'http://localhost/product.php';

    const getCategory = async () => {
        const res = await axios.get(urlCategory)
        setCategory(res.data);
    }

    const getProducts = async () => {
        const res = await axios.get(urlProduct)
        setProduct(res.data)
    }


    useEffect(()=> {
        if(stateGet) {
            getCategory();
            getProducts();
            setStateGet(false)
        }
    }, [stateGet])



    return(
        <>
            <header className="header">
                <div className="header__wrap flex">
                    <div className="header__logotype">
                        <img className="logo" src="./img/logo.svg" alt="logo" />
                    </div>
                </div>
            </header>
            <div className="wrapper">
                <div className="add flex">
                    <button className="add">Добавить товар</button>
                    <button className="add">Добавить категорию</button>
                </div>
                <div className="nav__wrap flex">
                    <button>Все</button>
                    {category && category.map(item => {
                        return(
                            <button className="nav">{item.title_product}</button>
