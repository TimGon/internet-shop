import { Link } from "react-router-dom";
import { useAuth } from "../components/AuthContext";

const Cabinet = () => {

    const {
        authUser
    } = useAuth()

    return (
        <>
            <div className="cabinet flex">
                <h1 className="cabinet__title">Личный кабинет</h1>
                <div className="cabinet__wrapp">
                    <div className="cabinet__name">
                        <span className="title">Имя пользователя:{authUser[0]}</span>
                        
                    </div>
                    <div className="cabinet__mail">
                        <span className="title">Почта пользователя:{authUser[2]}</span>
                    </div>
                    <div className="cabinet__phone">
                        <span className="title">Телефон пользователя:{authUser[1]}</span>
                    </div>
                    <div className="cabinet__order">
                        <Link className="order-link" to={"/order"}>Заказы</Link>
                    </div>
                </div>
            </div> 
        </>
        
    )
}

export default Cabinet;