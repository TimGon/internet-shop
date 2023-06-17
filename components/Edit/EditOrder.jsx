import { useEffect, useState } from "react";

import { blurHandler, checkCateg } from "../CheckForm/Checking";
import { ErrorBlock } from "../Errors/ErrorBlock";
import { updateOrder } from "../ApiFunction/function";

const EditOrder = ({id, numOrder, title, stateOrder, sum, setActive, setState}) => {
   const [nameState, setNameState] = useState('');

   const [nameErr, setNameErr] = useState
      ('Поле с состоянием не может быть пустым!');
   const [valid, setValid] = useState(false);

   useEffect(()=>{
      if(nameErr){
         setValid(false)
      } else {
         setValid(true);
      }
   },[nameErr])

   const [nameStateDirty, setNameStateDirty] = useState(false);

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
               <label>Номер заказа</label>
               <input type="text" className="input-form" name="nameId" value={numOrder} disabled/>
            </div>
            <div className="form-block">
               <label>Название товара</label>
               <input type="text" className="input-form" name="nameId" value={title} disabled/>
            </div>
            <div className="form-block">
               {ErrorBlock(nameStateDirty, nameErr)}
               <label>Состояние заказа</label>
               <input type="text" className="input-form" name="stateOrder" 
               value={nameState} placeholder={stateOrder} 
               onChange={(e)=> checkCateg(e, setNameState, setNameErr)} onBlur={(e) => blurHandler(e, setNameStateDirty)} 
               />
            </div>
            <div className="form-block">
               <label>Сумма заказа</label>
               <input type="text" className="input-form" name="nameId" value={sum} disabled/>
            </div>

            <button disabled={!valid} type="button" className="btn"
               onClick={() => {
                     updateOrder(id, nameState, setNameState, setActive, setState);
               }}
            >Изменить категорию
            </button>
         </form>
      </>
      
   )
}

export default EditOrder;