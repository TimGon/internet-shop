const SinglePage = () => {
    return (
        <div className="main__wrapp--cards">
            <h1 className="main__title--product">Системные блоки</h1>
            <div className="main__card">
                <img src="" alt="heart" srcset="" />
                <h2 className="main__title--product-card">Корпус</h2>
                <div className="main__cost">Цена: 5000 руб.</div>
                <div className="main__rait flex">
                    <div className="main__rait--text">Рейтинг</div>
                    <div className="maint__rait--note">
                        <li>5</li>
                    </div>
                </div>
                <div className="main__btn">
                    <button className="main__btn--buy">Купить</button>
                </div>
            </div>
        </div>

    )
}

export default SinglePage;