import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { useBasket } from "../BasketContext";
import CustomLink from "../CustomLink/CustomLink";
import './header.css';

const Header = () => {

    const {
        isLoggedIn,
        setAuthUser,
        setIsLoggedIn
    } = useAuth()

    const {
        basket
    } = useBasket();

    // const location = useLocation();

    const stateBtn = () => {
        setIsLoggedIn(false);
        setAuthUser(null);
        <Navigate to={'/auth'} replace={true}/>
    }
    // console.log(basket.map(item => item.count))
    return(
    <header className="header">
        <div className="header__wrap flex">
            <div className="header__logotype">
                <img className="logo" src="./img/logo.svg" alt="logo" />
            </div>
            <div className="header__wrap--right flex">
                
                {/* {location.pathname === '/register' || location.pathname === '/auth' ? '' 
                    : 
                    <div className="header__search">
                        <input className="header__search--input" type="search" placeholder="Поиск..."/>
                    </div>
                } */}

                <div className="header__nav flex">
                    <CustomLink to="/" >Главная</CustomLink>
                    <CustomLink to="/basket">
                        <div className="header__basket flex">
                            <img className="header__basket--img" src="./img/basket.svg" alt="basket" />
                            <span className="header__basket--text">Корзина({basket.length})</span>
                        </div>
                    </CustomLink>
                    {/* <CustomLink to="/favorite">                
                        <div className="header__favorite flex">
                            <img className="header__favorite--img" src="./img/heart.svg" alt="hear" />
                            <span className="header__favorite--text">Избранное</span>
                        </div>
                    </CustomLink> */}
                    {isLoggedIn ?
                        <CustomLink to ="/cabinet">
                            <div className="header__auth flex">
                                <img className="header__auth--img" src="./img/auth.svg" alt="user" />
                                <span onClick={stateBtn} className="header__auth--text">Выйти</span>
                                
                            </div>
                        </CustomLink>
                        :
                        <CustomLink to="/auth">                
                            <div className="header__auth flex">
                                <img className="header__auth--img" src="./img/auth.svg" alt="user" />
                                <span className="header__auth--text">Войти</span>
                            </div>
                        </CustomLink>
                    }

                </div>
            </div>
            
        </div>
    </header>
    )
}

export default Header;