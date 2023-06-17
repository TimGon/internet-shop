import { useEffect, useState } from "react";
import { checkDscrProd, checkImg, checkNumber, checkProdName } from "../CheckForm/Checking";
import { blurHandler } from "../CheckForm/Checking";
import { ErrorBlock } from "../Errors/ErrorBlock";
import { createProd, getProduct } from "../ApiFunction/function";
import { useProduct } from "../Contexts/ProductContext";
import { useLocation } from "react-router-dom";

const ProdCreate = () => {
   const [nameProd, setNameProd] = useState(''),
         [dscrProd, setDscrProd] = useState(''),
         [costProd, setCostProd] = useState(''),
         [brandProd, setBrandProd] = useState(''),
         [nameImgProd, setNameImgProd] = useState(''),
         [categProd, setCategProd] = useState('');

   const [nameProdErr, setNameProdErr] = useState
      ('Поле с названием продукта не может быть пустым!'),
         [dscrErr, setDscrErr] = useState
      ('Поле с описанием не может быть пустым'),
         [costErr, setCostErr] = useState
      ('Поле со стоимостью не может быть пустым'),
         [brandErr, setBrandErr] = useState
      ('Поле с брендом не может быть пустым'),
         [nameImgErr, setNameImgErr] = useState
      ('Поле с названием изображения не может быть пустым!'),
         [categProdErr, setCategProdErr] = useState
      ('Поле с категорией не может быть пустым');

   const [nameProdDirty, setNameProdDirty] = useState(false),
         [dscrProdDirty, setDscrProdDirty] = useState(false),
         [costProdDirty, setCostProdDirty] = useState(false),
         [brandProdDirty, setBrandProdDirty] = useState(false),
         [nameImgProdDirty, setNameImgProdDirty] = useState(false),
         [categProdDirty, setCategProdDirty] = useState(false);
   const [valid, setValid] = useState(false);

   const [cond, setCond] = useState(false);

   const location = useLocation();

   const { 
      setProduct,
      setResult,
      setCateg,
   } = useProduct();

   const prod = location.pathname.split('/product/').join('');
   useEffect(()=> {
      if(nameProdErr || dscrErr || costErr || brandErr || nameImgErr || categProdErr) {
         setValid(false);
      } else {
         setValid(true);
      }
   }, [nameProdErr, dscrErr, costErr, brandErr, nameImgErr, categProdErr])

   if(cond) {
      getProduct(prod, setProduct, setCateg, setResult);
      setCond(false);
   } 
   return(
      <>
         <h1 className="title">Создание товара</h1>
         <form className="admin__form">
         <div className="form-block">               
                  {ErrorBlock(nameProdDirty, nameProdErr)}
                  <label>Название товара</label>
                  <input className="input-form" type="text" name="titleProd" 
                  value={nameProd} placeholder='Ноутбук LG' 
                  onChange={(e)=> checkProdName(e, setNameProd, setNameProdErr)} onBlur={(e) => blurHandler(e, setNameProdDirty)} 
                  />
               </div>
               <div className="form-block text-area-form">               
                  {ErrorBlock(dscrProdDirty, dscrErr)}
                  <label>Описание товара</label>
                  <textarea className="input-form textarea-prod" type="text" name="descrProd" 
                  value={dscrProd} placeholder='Хороший компактный ноутбук' 
                  onChange={(e)=> checkDscrProd(e, setDscrProd, setDscrErr)} onBlur={(e) => blurHandler(e, setDscrProdDirty)}
                  />
               </div>
               <div className="form-block">
                  {ErrorBlock(costProdDirty, costErr)}
                  <label>Стоимость товара</label>
                  <input className="input-form" type="text" name="costProd" 
                  value={costProd} placeholder={'13500'} 
                  onChange={(e)=> checkNumber(e, setCostProd, setCostErr)} onBlur={(e) => blurHandler(e, setCostProdDirty)} 
                  />
               </div>
               <div className="form-block">
                  {ErrorBlock(brandProdDirty, brandErr)}
                  <label>Бренд товара</label>
                  <input className="input-form" type="text" name="brandProd" 
                  value={brandProd} placeholder='Asus' 
                  onChange={(e)=> checkImg(e, setBrandProd, setBrandErr)} onBlur={(e) => blurHandler(e, setBrandProdDirty)} 
                  />
               </div>
               <div className="form-block">               
                  {ErrorBlock(nameImgProdDirty, nameImgErr)}
                  <label>Название изображение товара</label>
                  <input className="input-form" type="text" name="imgProd" 
                  value={nameImgProd} placeholder='asus' 
                  onChange={(e)=> checkImg(e, setNameImgProd, setNameImgErr)} onBlur={(e) => blurHandler(e, setNameImgProdDirty)} 
                  />
               </div>

               <div className="form-block">
                  {ErrorBlock(categProdDirty, categProdErr)}
                  <label>Категория товара</label>
                  <input className="input-form" type="text" name="categ" 
                  value={categProd} placeholder='block' 
                  onChange={(e)=> checkImg(e, setCategProd, setCategProdErr)} onBlur={(e) => blurHandler(e, setCategProdDirty)} 
                  />
               </div>

            <button disabled={!valid} type="button" className="btn"
               onClick={() => {
                  createProd(nameProd, dscrProd, costProd, categProd, brandProd, nameImgProd, setNameProd, setDscrProd, setCostProd , setBrandProd, setNameImgProd, setCategProd, setCond);
               }}
            >Добавить категорию
            </button>
         </form>
      </>
   )
}
export default ProdCreate;