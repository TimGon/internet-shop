import { useAuth } from "../Contexts/AuthContext";
import CustomLink from "../CustomLink/CustomLink";
import { Map, Placemark } from '@pbe/react-yandex-maps';
import './footer.css';

const Footer = () => {
    
    const { isLoggedIn } = useAuth()

    return(
        <footer className="footer">
            <div className="footer__wrap flex">
                <div className="footer__logo">
                    <img className="footer__logo--img" src="./img/logotype.svg" alt="logo"/>
                </div>
                <nav className="footer__nav">
                    <CustomLink to="/basket">Корзина</CustomLink>
                    
                    {isLoggedIn ? 
                        <CustomLink to="/cabinet">Личный кабинет</CustomLink>
                        :
                        <CustomLink to="/auth">Личный кабинет</CustomLink>    
                    }

                    <CustomLink to="/about">О нас</CustomLink> 
                    
                </nav>
                <div className="footer__map">
                    <h1 className="footer__white">Наше местоположение:</h1>
                <Map
                    defaultState={{
                    center: [54.3156, 48.3893],
                    zoom: 16,
                    controls: ["zoomControl", "fullscreenControl"],
                    }}
                    modules={["control.ZoomControl", "control.FullscreenControl"]}
                >
                    <Placemark defaultGeometry={[54.3156, 48.3893]} />
                </Map>
                </div>
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
        </footer>
    )
}

export default Footer;