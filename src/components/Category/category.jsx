import { Link } from "react-router-dom";
import { delItem, getCategory } from "../ApiFunction/function";
import { useAuth } from "../Contexts/AuthContext";
import { useCategory } from "../Contexts/CategoryContext";
import { useEffect } from "react";

import { useEditCateg } from "../Contexts/EditCategContext";

const Category = () => {
    const { status } = useAuth();

    const { category, setCategory } = useCategory();

    const { 
        setIdCateg,
        setTitleCateg,
        setCategories,
        setActiveCateg,
        stateActive,
        setStateActive,
    } = useEditCateg()
    
    useEffect(() => {
        if(stateActive) {
            getCategory(setCategory);
            setStateActive(false);
        }
    },[stateActive])

    const deleteCateg = (id) => {
        delItem(id, setStateActive);
    }

    const editCateg = (id, title, nameImg) => {
        setIdCateg(id)
        setTitleCateg(title)
        setCategories(nameImg)
        setActiveCateg(true)
    }
    
    return(
        <>
            {category && category !== '' ? category.map(item => {
                    return(
                    status === 'admin' ?
                        
                        <div key={item.id} className="main__product flex">
                        
                            <Link to={`/product/${item.nameImg}`}>
                                <img className="main__img" src={`./img/${item.nameImg}.png`} alt={item.nameImg}/>
                                <h2 className="main__title success__color">{item.title_product}</h2>
                            </Link>

                            <button className="admin__btn admin__delete"
                                onClick={() => deleteCateg(item.id)}
                            >Удалить категорию</button>
                            
                            <button className="admin__btn admin__edit"
                                onClick={() => editCateg(item.id, 
                                    item.title_product, item.nameImg)}
                            >Редактировать категорию
                            </button>

                        </div>
                        :
                        <div key={item.id} className="main__product flex">
                            <Link to={`/product/${item.nameImg}`}>
                                <img className="main__img" src={`./img/${item.nameImg}.png`} alt={item.nameImg}/>
                                <h2 className="main__title success__color">{item.title_product}</h2>
                            </Link>
                        </div>
                    
                    )
                }):
                (<div className="err">Произошла ошибка. Введутся технические работы.</div>)
            }
            
        </>
    )
}

export default Category;