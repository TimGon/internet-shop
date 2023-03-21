import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useBasket } from "../components/BasketContext";
import { getProduct } from "../components/getFunc/function";

const Product = () => {
    
    const { product } = useParams();
    const [categ, setCateg] = useState(''),
          [prod, setProd] = useState(''),
          [stateUse, setStateUse] = useState(true); 

    const {
        addBasket,
        basket,
        addCount,
        removeCount
    } = useBasket();

    useEffect(()=> {
        if(stateUse) {
            getProduct(product, setProd, setCateg);
            setStateUse(false);
        } 
    }, [stateUse, product])

// const add = (ident, nameProd, costProd, image) => {

//     if( ident === id && nameProd === title && costProd === cost && image === img) {
//         setId(ident)
//         setTitle(nameProd)
//         setCost(costProd)
//         setImg(image)
//         setCount(count+1)
//         console.log('Count True', count)
//     } else {
//         setId(ident)
//         setTitle(nameProd)
//         setCost(costProd)
//         setImg(image)
//         setCount(1)
//     }

//     console.log(id, title, cost, img);
    
// }

console.log('category', categ, 'product', prod)

    return(
        <div className="main__container">
                <h1 className="title">{categ[2] === product ? categ[1]: ''}</h1>
                    {/* <div className="flex">
                            <div className="right flex">
                            <h2 className="title">Фильтр</h2>
                            <div className="right__brands flex">
                                <div className="brand">
                                    <input type="checkbox" name="" id="" /> AirTone
                                </div>
                                    <div className="brand">
                                        <input type="checkbox" name="" id="" /> Acer
                                    </div>
                                    <div className="brand">
                                        <input type="checkbox" name="" id="" /> Asus
                                    </div>
                                    <div className="brand">
                                        <input type="checkbox" name="" id="" /> HP
                                    </div>
                                    <div className="brand">
                                        <input type="checkbox" name="" id="" /> Hyper
                                    </div>
                                    <div className="brand">
                                        <input type="checkbox" name="" id="" /> Lenovo
                                    </div>
                                    <div className="brand">
                                        <input type="checkbox" name="" id="" /> MSI
                                    </div>
                                
                            </div>
                            <div className="right__costs flex">
                                От <input type="text" /> До <input type="text" />
                            </div>
                        </div>
                    </div> */}
                    <div className="center flex">
                            {typeof(prod) !== typeof('') ? prod.map(elem => {
                                return(
                                    <div key={elem.id} className="product flex">
                                        {elem.category === product ?
                                            basket.findIndex(product => product.id === elem.id) > -1 ?
                                                <div className="product flex">  
                                                    <img className="product__img" src={`./img/${elem.img}.jpg`} alt={elem.img} />
                                                    <h2 className="product__title">{elem.title_product}</h2>
                                                    <p className="product__cost">Цена: {elem.cost_product} рублей</p>
                                                    
                                                    <div className="button">
                                                        <button className="buy" onClick={() => removeCount(elem.id)}>-</button>
                                                        <span className="product__count">{basket.map(item => item.id === elem.id ? item.count : '')}</span>
                                                        <button className="buy" onClick={() => {addCount(elem.id)}}>+</button>
                                                    </div>

                                                </div>
                                        :
                                        <>
                                            <img className="product__img" src={`./img/${elem.img}.jpg`} alt={elem.img} />
                                            <h2 className="product__title">{elem.title_product}</h2>
                                            <span className="product__cost">Цена: {elem.cost_product} рублей</span>
                                            <button className="buy" onClick={()=> {addBasket(elem)}}>Купить</button>
                                        </>
                                            :
                                            ''
                                        }
                                    </div>
                                )
                            }):
                            <div>Пусто</div>
                            }
                        </div>
            
        </div>
    )   
}

export default Product;