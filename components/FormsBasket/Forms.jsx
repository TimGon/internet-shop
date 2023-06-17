import { useState } from "react";
import { Link } from "react-router-dom";
import { createOrder, getOrders } from "../ApiFunction/function";
import { useOrder } from "../Contexts/OrderContext";
import { useBasket } from "../Contexts/BasketContext";
import { useAuth } from "../Contexts/AuthContext";

import './forms.css';

const Forms = () => {

   const [valOne, setValOne] = useState(''),
         [valTwo, setValTwo] = useState('');

   const {
      setOrder
   } = useOrder()

   const {
      basket,
      removeBasket,
      totalCost
   } = useBasket();
   
   const {
      authUser,
   } = useAuth()

   const handleMakeOnOrder = () => {
      let titlesProd = basket.map(item => item.title_product),
         cost = totalCost(basket),
         number = 1 + Math.round(Math.random() * (5000-1));
      createOrder(number, titlesProd, authUser[0], cost, valOne, valTwo)
      getOrders(authUser[0], setOrder)
      removeBasket();
   }

   const handleRadioValOne = (e) => {
      setValOne(e.target.value);
   },
   handleRadioValTwo = (e) => {
      setValTwo(e.target.value);
   }

   return (
      <>
         <div className="delivery">
            <span className="delivery__info">Выбор способ доставки</span>
            <form method="#" className="delivery__form flex">
               <div className="pickup">
                  <input type="radio" name="delivery" id="pickup"
                     checked={valOne === 'Самовызов' ? true : false}
                     onChange={(e)=>handleRadioValOne(e)}
                     value='Самовызов' 
                  />Самовызов
               </div>
               <div className="courier">
                  <input type="radio" name="delivery" id="courier"
                     checked={valOne === 'Курьер' ? true : false}
                     onChange={(e)=>handleRadioValOne(e)} 
                     value='Курьер' 
                  />Курьером
               </div>
            </form>
         </div>
         <div className="pay">
            <span className="pay__info">Выбор способ оплаты</span>
            <form method="#" className="pay__form flex">
               <div className="pay__card">
                  <input type="radio" disabled name="pay" id="card" value='Картой'
                        checked={valTwo === 'Картой' ? true : false} 
                        onChange={(e)=>handleRadioValTwo(e)}
                  />По карте
               </div>
               <div className="pay__money">
                  <input type="radio" name="pay" id="money" value='Наличными'
                        checked={valTwo === 'Наличными' ? true : false} 
                        onChange={(e)=>handleRadioValTwo(e)}
                  />Наличными
               </div>
            </form>
         </div>
         <Link
            style={{pointerEvents: valOne && valTwo ? '': 'none'}}
            className={valOne && valTwo ? "enabled" : 'disabled'} 
            to={'/order'}
            onClick={handleMakeOnOrder}
         >
            Оформить
         </Link>

      </>
   )
}

export default Forms;