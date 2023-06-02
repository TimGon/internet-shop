
const ErrorMsg = (error) => {
    return (
        <div>
            {/* Вы можете использовать свои стили и код для обработки ошибок */}
            <p>Произошла ошибка на сайте, подождите пару минут или вернитесь к товару позже </p>
            <p>{error.message}</p>
        </div>
    );
};

export default ErrorMsg;