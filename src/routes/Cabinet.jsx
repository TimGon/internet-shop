import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import './footer.css';

const Footer = () => {
    
    return(
        <footer className="footer">
            <div className="footer__wrap flex">
                <div className="footer__logo">
                    <img className="footer__logo--img" src="./img/logotype.svg" alt="logo"/>
                </div>
                <nav className="footer__nav">
                    <CustomLink to="/basket">Корзина</CustomLink>
                    <CustomLink to="/cabinet">Личный кабинет</CustomLink>
                    <CustomLink to="/link">Связаться с нами</CustomLink>
                    
                </nav>
                <div className="footer__social">
                    <ul className="footer__list--social lst">
                        <li className="footer__vk item">
                            <a href="https://vk.com"><img className="footer__vk--img" src="./img/vk.svg" alt="vk"/></a>
                        </li>
                        <li className="footer__telegram item">
                            <a href="https://telegram.com"><img className="footer__telegram--img" src="./img/telegram.svg" alt="telegram"/></a>
                        </li>
                        <li className="footer__youtube item">
                            <a href="https://youtube.com"><img className="footer__youtube--img" src="./img/Youtube.svg" alt="youtube"/></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__text flex">&#169; ООО Компьютерный магазин. Все права защищены. 2023г.</div>
      