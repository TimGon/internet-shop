import { Link } from "react-router-dom";
import { generateKey } from "../CheckForm/Checking";
import { useBasket } from "../Contexts/BasketContext";
import Arrange from "../ArrangeBasket/Arrange";

const BasketProduct = () => {

   const {
      basket,
      removeCount,
      addCount,
  } = useBasket();

   return (
      <>
         {basket.length !== 0 ?
            (
               <>
               <div className="wrapper__product flex">
                  {basket.map(elem => {
                     
                     return(
                           <div key={generateKey(elem.id)}  className="basket__product flex">
                              <img className="product__img" src={`./img/${elem.img}.jpg`} alt={elem.img} />
                              <div className="basket__dscr-block">
                                 <h2 className="product__title">
                                       {elem.title_product ? elem.title_product: ''
                                       }</h2>
                                 <p className="product__descr">                                      
                                       <span>Описание: &nbsp;</span>
                                       {elem.descr}
                                 </p>
                                 <p className="product__cost">
                                       Цена/шт:{elem.cost_product}₽
                                 </p>
                                 <div className="button">
                                       <button 
                                          className="btn" 
                                          onClick={() => removeCount(elem.id)}
                                       >
                                          -
                                       </button>
                                       <span className="product__count">
                                          {basket.map(item => item.id === elem.id ? item.count : '')}
                                       </span>
                                       <button 
                                          className="btn" 
                                          onClick={() => {addCount(elem.id)}}
                                       >
                                          +
                                       </button>
                                 </div>
                              </div>
                           </div>
                        )
                     })
                  }
               </div>
               <Arrange/>
            </>
            )
         :
            <div className="empty flex">
               <img className="empty-img" src="./img/shop-empty.png" alt="empty"/>
               Пустая корзина!
               <button className="btn buy--basket"><Link to={`/`}>Вернуться на главную</Link></button>
            </div> 
         }
      </>
   );
}

export default BasketProduct;