import CustomLink from "./CustomLink";

const Header = () => {
    
    return(
    <header className="header">
        <div className="header__logotype">
            <img className="logo" src="" alt="logo" srcset="" />
        </div>
        <div className="header__search">
            <input type="search" placeholder="Поиск..."/>
        </div>
        <nav>
            <CustomLink to="/" >Главная</CustomLink>
            <CustomLink to="/basket">
                <div className="header__basket flex">
                    <img className="header__basket--img" src="#" alt="basket" />
                    <span className="header__basket--text">Корзина</span>
                </div>
            </CustomLink>
            <CustomLink to="/favorite">                
                <div className="header__favorite flex">
                    <img className="header__favorite--img" src="#" alt="basket" />
                    <span className="header__favorite--text">Избранное</span>
                </div>
            </CustomLink>
            <CustomLink to="/auth">                
                <div className="header__auth flex">
                    <img className="header__auth--img" src="#" alt="basket" />
                    <span className="header__auth--text">Войти</span>
                </div>
            </CustomLink>
        </nav>

    </header>
    )
}

export default Header;