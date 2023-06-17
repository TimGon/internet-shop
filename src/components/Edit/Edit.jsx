import { useEffect, useState } from "react";

import { blurHandler, checkCateg, checkImg } from "../CheckForm/Checking";
import { ErrorBlock } from "../Errors/ErrorBlock";
import { updateItem } from "../ApiFunction/function";

const Edit = ({id, title, categ, setActive, setState}) => {
    const [img, setImg] = useState(''),
    [nameCateg, setNameCateg] = useState('');

    const [imgError, setImgError] = useState
        ('Поле с изображением не может быть пустым!'),
        [nameErr, setNameErr] = useState
        ('Поле с категорией не может быть пустым!');

    const [categDirty, setCategDirty] = useState(false),
        [imgDirty, setImgDirty] = useState(false);
    
    const [valid, setValid] = useState(false);

        useEffect(()=> {
            if(imgError || nameErr) {
                setValid(false);
            } else{
                setValid(true);
            }    
        },[imgError, nameErr])

    return(
        <>
            <div className="modal__title flex">
                <h1>{title}:Edit</h1>
                <button className="cross" onClick={()=> setActive(false)}/>
            </div>
            <form className="modal__form">
                <div className="form-block">
                    <label>ID</label>
                    <input type="text" className="input-form" name="nameId" value={id} disabled/>
                </div>
                <div className="form-block">
                    {ErrorBlock(categDirty, nameErr)}
                    <label>Имя категории</label>
                    <input type="text" className="input-form" name="nameCateg" 
                    value={nameCateg} placeholder={title} 
                    onChange={(e)=> checkCateg(e, setNameCateg, setNameErr)} onBlur={(e) => blurHandler(e, setCategDirty)} 
                    />
                </div>
                
                <div className="form-block">
                    {ErrorBlock(imgDirty, imgError)}
                    <label>Название изображение</label>
                    <input type="text" className="input-form" name="nameImg" 
                    value={img}
                    placeholder={categ} onChange={(e)=> checkImg(e, setImg, setImgError)} 
                    onBlur={(e) => blurHandler(e, setImgDirty)}/>
                </div>

                <button type="button" disabled={!valid} className="btn"
                    onClick={() => {
                        updateItem(id, nameCateg, img, setImg, 
                            setNameCateg, setActive, setState);
                    }}
                >Изменить категорию
                </button>
            </form>
        </>
        
    )
}

export default Edit;