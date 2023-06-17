import { useEffect } from "react";
import { delProd } from "../ApiFunction/function";
import { useAuth } from "../Contexts/AuthContext";
import { useBasket } from "../Contexts/BasketContext";
import { useEditProd } from "../Contexts/EditProdContext";

import './product.css';
import { generateKey } from "../CheckForm/Checking";


const Product = ({nameProd, nameCateg}) => {
    const {
        addBasket,
        basket,
        addCount,
        removeCount
    } = useBasket();

    const {
        status
    } = useAuth()

    const {
        setIdProd,
        setTitleProd,
        setDscrProd,
        setCostProd,
        setCategProd,
        setBrandProd,
        setTitleImg,
        setStateProdActive,
        setActiveProd,
    } = useEditProd()

    const editProd = (id, title, descr, cost, categ, brand, nameImg) => {
        setIdProd(id)
        setTitleProd(title)
        setDscrProd(descr)
        setCostProd(cost)
        setCategProd(categ)
        setBrandProd(brand)
        setTitleImg(nameImg)
        setActiveProd(true)
    }

    return(
        <>
            {typeof nameProd !== typeof '' && nameProd ? nameProd.map(elem => {
                return(
                    <div key={generateKey(elem.id)} className="product flex">
                        {elem.category === nameCateg ?
                            basket.findIndex(product => product.id === elem.id) > -1 ?
                                <div key={generateKey(elem.id)} className="product flex">  
                                    <img className="product__img" src={`../img/${elem.img}.jpg`} alt={elem.img} />
                                    <h2 className="product__title">{elem.title_product}</h2>
                                    <p className="product__cost">Цена: {elem.cost_product} ₽</p>
                                    
                                    <div className="button">
                                        <button className="btn" onClick={() => removeCount(elem.id)}>-</button>
                                        <span className="product__count">{basket.map(item => item.id === elem.id ? item.count : '')}</span>
                                        <button className="btn" onClick={() => {addCount(elem.id)}}>+</button>
                                    </div>

                                </div>
                        :
                        <>
                            <img className="product__img" src={`../img/${elem.img}.jpg`} alt={elem.img} />
                            <h2 className="product__title">{elem.title_product}</h2>
                            <span className="product__cost">Цена: {elem.cost_product} ₽</span>
                            <button className="btn" onClick={()=> {addBasket(elem)}}>Купить</button>
                            {status === 'admin' ?
                                <div className="admin__btns-block">
                                    <button className="admin__btn admin__edit"
                                    onClick={() => editProd(elem.id, elem.title_product, elem.descr, elem.cost_product, elem.category, elem.brand, elem.img)}
                                    >
                                    Редактировать</button>
                                    <button className="admin__btn admin__del"
                                    onClick={() => 
                                        delProd(elem.id, setStateProdActive)
                                    }
                                    >
                                    Удалить
                                    </button>
                                </div>: ''
                            }
                        </>
                            :
                            ''
                        }
                    
                    </div>
                
                ) 
            })
                :
                <div>Пусто</div>
            }
        
    </>
    )  
}
export default Product;