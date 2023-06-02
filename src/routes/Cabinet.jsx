import { Link } from "react-router-dom";
import { useAuth } from "../components/Contexts/AuthContext";
import { getOrder, getOrders } from "../components/ApiFunction/function";
import { useOrder } from "../components/Contexts/OrderContext";

const Cabinet = () => {

    const { authUser, status } = useAuth()

    const { setOrder } = useOrder()

    return (
        <>
            <div className="cabinet flex">
                <h1 className="cabinet__title">Личный кабинет</h1>
                <div className="cabinet__wrapp">
                    <div className="cabinet__name">
                        <span>Имя пользователя:{authUser[0]}</span>
                    </div>
                    <div className="cabinet__mail">
                        <span>Почта пользователя:{authUser[2]}</span>
                    </div>
                    <div className="cabinet__phone">
                        <span>Телефон пользователя:{authUser[1]}</span>
                    </div>
                    <div className="cabinet__order">
                        <Link className="order-link" to={"/orders"}
                            onClick={()=>{status === 'admin'? getOrder(setOrder):  getOrders(authUser[0], setOrder)}}
                        >Заказы</Link>
                    </div>
                </div>
            </div> 
        </>
        
    )
}

export default Cabinet;