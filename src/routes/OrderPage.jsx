import { Link } from "react-router-dom";
import { useAuth } from "../components/Contexts/AuthContext";
import { useBasket } from "../components/Contexts/BasketContext";
import { useOrder } from "../components/Contexts/OrderContext";
import { getOrder, getOrders } from "../components/ApiFunction/function";

const Order = () => {
    
    const { basket } = useBasket();

    const { authUser, status } = useAuth();

    const { 
        setOrder
    } = useOrder();

    return(
        <div className="order__container">
            {basket ?
                <div className="order flex">
                    <h1 className="order__title">Информация по заказу</h1>
                    <span className="order__id">
                        Ваш номер заказа указан в списке заказах!
                    </span>
                    <p className="success">
                        Спасибо, {authUser[0]}, за оформленный заказ!
                        C вами свяжется курьер или оператор сайта для уточнения об доставке.
                    </p>
                    
                    <Link className="success__color" to={'/orders'} 
                        onClick={()=> status === 'admin'? getOrder(setOrder):  getOrders(authUser[0], setOrder)}
                    >Перейти к заказам</Link>
                </div>
                :
                <div className="err">Заказ не оформлен!</div>  
            }
        </div>
    
    )

}
export default Order;