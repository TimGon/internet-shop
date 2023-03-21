import { Link } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import { useBasket } from "../components/BasketContext";

const Basket = () => {

    const {
        basket,
        removeCount,
        addCount,
        totalCost
    } = useBasket();

    const {
        authUser,
        isLoggedIn
    } = useAuth()

    return (
        <div className="main__container">
            <h1 className="title">Корзина</h1>
            {basket.length !== 0 ?
                 (
                    <>
                        <div className="wrapper__product flex">
                            {basket.map(elem => {
                                
                                return(
                                    <div key={elem.id} className="basket__product flex">
                                        <img className="product__img" src={`./img/${elem.img}.jpg`} alt={elem.img} />
                                        <h2 className="product__title">{elem.title_product ? elem.title_product: ''}</h2>
                                        <p className="product__cost">{elem.cost_product * elem.count}</p>
                                        <div className="button">
                                            <button className="buy" onClick={() => removeCount(elem.id)}>-</button>
                                            <span className="product__count">{basket.map(item => item.id === elem.id ? item.count : '')}</span>
                                            <button className="buy" onClick={() => {addCount(elem.id)}}>+</button>
                                        </div>
                                        {/* <button onClick={() => removeCount(item.id)}>Удалить</button> */}
                                        {console.log(elem)}
                                    </div>
                                )
                            
                            })
                        }
                    </div>
                    <div className="arrange flex">
                        {authUser && isLoggedIn ? 
                        <Link className="success__color" to={'/order'}>Перейти к оформлению</Link> :
                        <div className="err">Авторизируйтесь чтобы оформить заказ! <Link className="success__color" to={'/auth'}> Авторизироваться</Link> </div>
                        } 
                        <span className="result success__color">Итоговый счёт: {totalCost(basket)}</span>
                    </div>
                    </>
                )
                :
            <div className="empty flex">
                <img className="empty-img" src="./img/shop-empty.png" alt="empty"/>
                Пустая корзина!
                <button className="buy buy--basket"><Link to={`/`}>Вернуться на главную</Link></button>
            </div> 
        }
            {/* <Link className="success__color" to={'/order'}>Перейти к оформлению</Link> */}
            {/* <div className="basket__product">
                    <span>{id}</span>
                    <img src={`./img/${img}.png`} alt={img} />
                    <h2>{title ? title: ''}</h2>
                    <span>{cost}</span>
                    <div>Count: {count}</div> 
                </div> */}
        </div>

    )
}

export default Basket;