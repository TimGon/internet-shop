import { Link } from "react-router-dom";
const NotFoundPage = () => {
    return (
        <div className="not-found flex">
            Страница не найдена. Вернитесь на <Link className="white" to="/">Главную</Link>.
        </div>
    )
}

export default NotFoundPage;