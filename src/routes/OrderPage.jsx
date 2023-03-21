import { Link } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import { useBasket } from "../components/BasketContext";

const Order = () => {

    const {
        basket,
        setBasket
    } = useBasket();


    const {
        authUser,
    } = useAuth();

    const basketDel = () => {
        setBasket(null);
    }

    return(
        <>
        {basket ?
            <div className="order flex">
                <span className="order__id"> Id заказа:{Math.floor(Math.random() * 10)}</span>
                <h1 className="order__title">Квитанция оплаты</h1>
                <p className="success">
                    Спасибо, {authUser[0]}, за оформленный заказ!
                    Мы свяжемся с вами по почте!
                </p>
                
                <Link className="success__color" onClick={()=> basketDel()} to={'/'}>Перейти на главную</Link>
            </div>
            :
            <div className="err">Заказ не оформлен!</div>  
        }

        </>
    
    )

}
export default Order;