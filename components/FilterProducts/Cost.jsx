import { useProduct } from "../Contexts/ProductContext";

import Slider from '@material-ui/core/Slider';
import { Input } from "@material-ui/core";

const Cost = () => {
      const { product, setResult, arrVal, setArrVal } = useProduct()

   const handleChange = (event, newValue) => {
      setArrVal(newValue);
      filterByCost(arrVal[0], arrVal[1])
   };

   const handleInpMinChange = (event) => {
      setArrVal(event.target.value === '' ? arrVal : [Number(event.target.value), arrVal[1]]);
      filterByCost(arrVal[0], arrVal[1])
   };
   
   const handleInpMaxChange = (event) => {
      setArrVal(event.target.value === '' ? arrVal : [arrVal[0], Number(event.target.value) ]);
      filterByCost(arrVal[0], arrVal[1])
   };
   
   const handleBlur = () => {
      if (arrVal < 1000) {
         setArrVal([1000, 250000]);
      } else if (arrVal > 250000) {
         setArrVal([1000, 250000]);
      }
   };
   const color = {
      color:'#6742EB'
   }

   let filterByCost = (from, to) => {
      if(product) {
         let filterProd = product.filter(item => {
            if (item.cost_product >= from && item.cost_product <= to) {
                  return item;
            }
         })

      setResult(filterProd);
      }
   }
   return(
      <div className="right__costs">
         <h3 className="filter__title">Цена, ₽</h3>
         <div className="min-max-slider flex">
               <Slider
                  value={arrVal}
                  onChange={handleChange}
                  min={1000}
                  max={250000}
                  step={1}
                  style={color}
                  aria-labelledby="range-slider"
               />
               <div className="flex space-input">
                  <Input
                     className='input'
                     value={arrVal[0]}
                     margin="dense"
                     onChange={handleInpMinChange}
                     onBlur={handleBlur}
                     inputProps={
                           {
                           step: 1,
                           min: 1000,
                           max: 249000,
                           type: 'number',
                           'aria-labelledby': 'input-slider',
                           }
                     }
                  />
                  <Input
                     className='input'
                     value={arrVal[1]}
                     margin="dense"
                     onChange={handleInpMaxChange}
                     onBlur={handleBlur}
                     inputProps={{
                     step: 1,
                     min: 1000,
                     max: 250000,
                     type: 'number',
                     'aria-labelledby': 'input-slider',
                     }}
                  />
               </div>
         </div> 
      </div>
   )
}

export default Cost;