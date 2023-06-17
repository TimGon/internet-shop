import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { useOrder } from "../Contexts/OrderContext";
import { delOrder, getOrders } from "../ApiFunction/function";
import { useEditOrder } from "../Contexts/EditOrderContext";

import './user.css';
import { generateKey } from "../CheckForm/Checking";
import { useAuth } from "../Contexts/AuthContext";

const User = () => {

   const [orderUser, setOrderUser] = useState('');

   const {
      status
   } = useAuth();

   const { 
      nameUser,
   } = useOrder();

   const {
      setIdOrder,
      setTitleOrder,
      setNumberOrder,
      setSumOrder,
      setActiveOrder,
      setStateOrder,
      condActive,
      setCondActive
   } = useEditOrder()

   const {id} = useParams();
   const [state, setState] = useState(true);

   const editOrder = (id, numOrder, titleProd, stateOrder, sumOrder) => {
      setIdOrder(id)
      setTitleOrder(titleProd)
      setNumberOrder(numOrder)
      setSumOrder(sumOrder)
      setStateOrder(stateOrder)
      setActiveOrder(true)
   }

   const deleteOrder =(id) => {
      delOrder(id, setCondActive);
   }

   useEffect(()=> {
      if(state) {
         getOrders(nameUser[id], setOrderUser)
         setState(false);
      }

      if(condActive) {
         getOrders(nameUser[id], setOrderUser);
         setCondActive(false);
      }
   },[state, condActive, nameUser])

   return(
      <div className="main__container">
         <h1 className="title">{nameUser[id]} : Заказ</h1>
         {orderUser ? orderUser.map(item => {
            return(
               
               <div key={generateKey(item.id)} className="orders__product">
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
                     <button className="admin__btn admin__edit"
                     onClick={()=> editOrder(item.id, item.number_order, item.title_product, item.state_order, item.sum_order)}
                     >Редактировать</button>
                     
                     <button className="admin__btn admin__del"
                     onClick={()=> deleteOrder(item.id)}
                     >Удалить заказ</button>
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
         {orderUser ? status === 'admin' ? 
            <Link className="success__color" to={'/orders'}>Вернуться назад</Link> 
            : 
            <Link className="success__color" to={'/'}>Вернуться назад к товарам</Link>
            : ''
         } 
            
      </div>
   )
}

export default User;