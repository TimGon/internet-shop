import { useEffect, useState } from "react";
import { checkImg } from "../CheckForm/Checking";
import { blurHandler } from "../CheckForm/Checking";
import { checkCateg } from "../CheckForm/Checking";
import { ErrorBlock } from "../Errors/ErrorBlock";
import { createItem, getCategory } from "../ApiFunction/function";
import { useCategory } from "../Contexts/CategoryContext";

const CategCreate = ({setActive}) => {
   const [img, setImg] = useState(''),
         [nameCateg, setNameCateg] = useState('');

   const [imgError, setImgError] = useState
         ('Поле с изображением не может быть пустым!'),
         
         [nameErr, setNameErr] = useState
         ('Поле с категорией не может быть пустым!');

   const [categDirty, setCategDirty] = useState(false),
         [imgDirty, setImgDirty] = useState(false);

   const [cond, setCond] = useState(false),
         [valid, setValid] = useState(false);

   const { setCategory } = useCategory();

   if(cond) {
      getCategory(setCategory);
   }

   useEffect(()=> {
      if(nameErr || imgError) {
         setValid(false)
      } else {
         setValid(true)
      }
   },[nameErr, imgError])

   return(
      <>
      <h1 className="title">Создание категории</h1>
      <form className="admin__form">
         <div className="form-block">
            {ErrorBlock(categDirty, nameErr)}
            <label>Имя категории</label>
            <input className="input-form" type="text" name="nameCateg" value={nameCateg} onChange={(e)=> checkCateg(e, setNameCateg, setNameErr)} onBlur={(e) => blurHandler(e, setCategDirty)} placeholder="Игровые ноутбуки"/>
         </div>
         
         <div className="form-block">
            {ErrorBlock(imgDirty, imgError)}
            <label>Название изображение</label>
            <input 
               type="text" className="input-form" name="nameImg" value={img} 
               onChange={(e)=> checkImg(e, setImg, setImgError)} 
            onBlur={(e) => blurHandler(e, setImgDirty)} placeholder="blocks"/>
         </div>

         <button disabled={!valid} className="btn" type="button"
            onClick={() => {
               createItem(nameCateg, img, setImg, setNameCateg, setCond);
            }}
         >Добавить категорию
         </button>
      </form>
      </>
      
   )
}
export default CategCreate;