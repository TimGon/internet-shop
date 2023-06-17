import { Link } from "react-router-dom";
import { useOrder } from "../Contexts/OrderContext";
import { useEffect, useState } from "react";
import { useAuth } from "../Contexts/AuthContext";

import './order.css';
import { generateKey } from "../CheckForm/Checking";

const StateOrder = () => {

   const [state, setState] = useState(true);

   const { status } = useAuth()

   const { 
      order,
      nameUser,
      setNameUser,
   } = useOrder()

   useEffect(()=> {
      if(state && order) {
         let arr = order.map(item => {return item.name_client})
         let filtered = arr.filter((curr, ind) => {console.log(curr, ind); return arr.indexOf(curr) === ind})
         setNameUser(filtered);
         setState(false)
      }
   }, [state, order])

   console.log(nameUser);
   
   return(
      <div className="main__container">
         <h1 className="title">
            {status === 'admin' ? 'Заказы пользователей' : 'Заказы'}
         </h1>
         <div className="orders__block">
            {status === 'admin' ?
                     nameUser.length !== 0 ? nameUser.map((item, ind) => {
                        return(
                           <div key={generateKey(item.id)}  className="orders__users">
                              <Link className="success__color user flex" to={`/user/${ind}`}>
                                 <svg className="user-avatar" data-name="Layer 1" id="Layer_1" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                                    <title/>
                                    <path d="M25,1A24,24,0,1,0,49,25,24,24,0,0,0,25,1Zm0,46A22,22,0,1,1,47,25,22,22,0,0,1,25,47Z"/>
                                    <path d="M25,25.41a13,13,0,0,0-13,13,1,1,0,0,0,2,0,11,11,0,1,1,22,0,1,1,0,0,0,2,0A13,13,0,0,0,25,25.41Z"/>
                                    <path d="M25,23.71a7,7,0,0,0,6.81-7.2A7,7,0,0,0,25,9.3a7,7,0,0,0-6.81,7.21A7,7,0,0,0,25,23.71ZM25,11.3a5,5,0,0,1,4.81,5.21A5,5,0,0,1,25,21.71a5,5,0,0,1-4.81-5.2A5,5,0,0,1,25,11.3Z"/>
                                 </svg>
                                 {item}
                              </Link> 
                           </div>
                        )
                     })
                     :
                     <div className="err">Нет пользователей, которые совершили заказ</div>
                  :
               order ? order.map(item => {
               return(
                  
                  <div key={generateKey(item.id)}  className="orders__product">
                     <>
                        <div>
                           <h2 className="title-product">{item.title_product}</h2>
                           <span className="id-product">Номер заказа: 
                              {item.number_order}
                           </span>
                        </div>
                     
                        <div className="dscr-product">
                           <div className="flex delive-pay">
                           <span>Способ доставки: {item.type_delivery}</span>
                           <span>Способ оплаты: {item.type_pay}</span>
                           </div>
                           Состояние заказа:&nbsp;
                           <span 
                              className={item.state_order === 'В ожидании' ? "load" 
                              : item.state_order === 'Ожидает получения' ? "success" : 'err' 
                           }> 
                              {item.state_order}
                           </span>
                           <span className="sum-order success__color">Сумма: {item.sum_order} ₽</span>
                        </div>
                     </>
                  </div>
               )})
               :
               <div>
                  <>
                     <span>Вы не заказали не один товар.</span>
                     <Link className="success__color" to={'/'}>Выбрать товар</Link>
                  </>
               </div>
            }
            
         </div>
      </div>
   )
}

export default StateOrder;