import { Link } from "react-router-dom";
const Notfoundpage = () => {
    return (
        <div>
            Страница не найдена. Вернитесь на <Link className="white" to="/">Главную</Link>.
        </div>
    )
}

export default Notfoundpage;