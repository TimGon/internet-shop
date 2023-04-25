import { Link } from "react-router-dom";
import { delItem, getCategory } from "../ApiFunction/function";
import { useAuth } from "../Contexts/AuthContext";
import { useCategory } from "../Contexts/CategoryContext";
import { useEffect, useState } from "react";
import ModalEdit from "../ModalEdit/Modal";
import Edit from "../Edit/Edit";

const Category = () => {
    const { status } = useAuth();

    const { category, setCategory } = useCategory();

    const [state, setState] = useState(true);
    const [cond, setCond] = useState(false);

    const [active, setActive] = useState(false)
    
    useEffect(() => {
        if(state) {
            getCategory(setCategory);
            setState(false);
        }
    },[state, setCategory])

    const deleteCateg = (id) => {
        delItem(id, setCond);
    }

    if(cond) {
        getCategory(setCategory)
        setCond(false);
    }
    return(
        <>
            {category && category.map(item => {
                    return(
                    status === 'admin' ?
                        <>
                            <ModalEdit active={active} setActive={setActive}>
                                <Edit id={item.id} title={item.title_product} categ={item.nameImg} active={setActive}/>
                            </ModalEdit>
                            <div key={item.id} className="main__product flex">
                            
                                <Link to={`/product/${item.nameImg}`}>
                                    <img className="main__img" src={`./img/${item.nameImg}.png`} alt={item.nameImg}/>
                                    <h2 className="main__title success__color">{item.title_product}</h2>
                                </Link>

                                <button className="admin__delete"
                                    onClick={() => deleteCateg(item.id)}
                                >Удалить категорию</button>
                                
                                <button className="admin__edit"
                                    onClick={() => setActive(true)}
                                >Редактировать категорию
                                </button>

                            </div>
                        </>
                        :
                        <div key={item.id} className="main__product flex">
                            <Link to={`/product/${item.nameImg}`}>
                                <img className="main__img" src={`./img/${item.nameImg}.png`} alt={item.nameImg}/>
                                <h2 className="main__title success__color">{item.title_product}</h2>
                            </Link>
                        </div>
                    
                    )
                })
            }
            
        </>
    )
}

export default Category;