import { useLocation } from "react-router-dom";
import { getProduct, searchItem } from "../ApiFunction/function";
import { generateKey } from "../CheckForm/Checking";
import { useBrand } from "../Contexts/BrandContext";
import { useProduct } from "../Contexts/ProductContext";
import { useEffect, useState } from "react";

const Brand = () => {

   const location = useLocation();
   const prod = location.pathname.split('/product/').join('');

   const {brand, setBrand} = useBrand();
   const { categ, setResult, setActive } = useProduct()

   const [newProd, setNewProd] = useState(''),
         [newCateg, setNewCateg] = useState('');

   const [cond, setCond] = useState(true),
         [state, setState] = useState(true);

   const handleSubmit = (brand, categ) => {
      if(brand) {
         searchItem(brand, categ, setResult)
         setActive(true)
      }
   }

   useEffect(()=> {
      if(state && typeof newProd !== typeof '' && newProd) {
         let arr = newProd.map(item => {return item.brand})
         let filtered = arr.filter((curr, ind) => {console.log(curr, ind); return arr.indexOf(curr) === ind})
         setBrand(filtered);
         setState(false)
      }
   }, [state, newProd])

   if(cond) {
      getProduct(prod, setNewProd, setNewCateg, setResult);
      setCond(false);
   }

   return (
      <div className="right__brands">
         <h3 className="filter__title">Бренды</h3>
         <div className="brand flex">
            {brand ? 
            brand.map(item => {
               return(
                     <div key={generateKey(item.id)} >
                        <button
                           className='filter__btn btn'
                           onClick={() => 
                                 handleSubmit(item, prod)
                           }
                        >
                           {
                           prod === categ[2] ? item : ''
                           }
                        </button>
                     </div>
                     
               )
            }):'Пусто'}
         </div>                      
      </div>
   )
}

export default Brand;