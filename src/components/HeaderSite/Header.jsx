// import { useLocation } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import { useBasket } from "../Contexts/BasketContext";
import CustomLink from "../CustomLink/CustomLink";

import './header.css';
// import Search from "../SearchProducts/Search";

const Header = () => {

    const {
        isLoggedIn,
        setAuthUser,
        setIsLoggedIn,
        setStatus
    } = useAuth()

    const { basket } = useBasket();

    // const location = useLocation();

    const stateBtn = () => {
        setIsLoggedIn(false);
        setAuthUser(null);
        setStatus(null);    
    }
    
    return(
    <header className="header">
        <div className="header__wrap flex">
            <div className="header__logotype">
                <CustomLink className="hide__mobile" to="/" >
                    <img className="logo" src='./img/logo.svg' alt="logo" />
                </CustomLink>
            </div>
            <div className="header__wrap--right flex">
                
                {/* {
                    location.pathname === '/product/block' ? <Search/>  
                    : ''
                } */}

                <div className="header__nav flex">
                    <CustomLink className="hide__mobile" to="/basket">
                        <div className="header__basket flex">
                            <img className="header__basket--img" src="./img/basket.svg" alt="basket" />
                            <span className="header__basket--text">
                                Корзина({basket.length})
                            </span>
                        </div>
                    </CustomLink>
                    {/* <CustomLink className="hide__mobile" to="/favorite">                
                        <div className="header__favorite flex">
                            <img className="header__favorite--img" src="./img/heart.svg" alt="hear" />
                            <span className="header__favorite--text">
                            Избранное
                            </span>
                        </div>
                    </CustomLink> */}
                    {isLoggedIn ?
                        <CustomLink to ="/cabinet">
                            <div onClick={() => stateBtn()} className="header__auth flex">
                                <img className="header__auth--img" 
                                src="./img/auth.svg" alt="user" />
                                <span className="header__auth--text">
                                    Выйти
                                </span>
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