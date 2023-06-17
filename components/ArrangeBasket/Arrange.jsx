import { useAuth } from "../Contexts/AuthContext";
import { useBasket } from "../Contexts/BasketContext";
import { Link } from "react-router-dom";
import Forms from "../FormsBasket/Forms";

import "./arrange.css";

const Arrange = () => {

   const {
      basket,
      totalCost
   } = useBasket();

   const {
      authUser,
      isLoggedIn
   } = useAuth()

   return(
      <div className="arrange flex">
         {authUser && isLoggedIn ? 
         <div className="elems flex">
            <Forms/>
         </div>
         :
         <div className="err">
               Авторизируйтесь чтобы оформить заказ! 
               <Link className="success__color" to={'/auth'}> Авторизироваться</Link> 
         </div>
         } 
         <span className="result success__color">
               Итоговый счёт: {totalCost(basket)}₽
         </span>
      </div>
   )
}

export default Arrange;