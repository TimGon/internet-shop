import { useEffect } from "react";
import { useProduct } from "../Contexts/ProductContext";

import './search.css';

const Search = () => {

   const { 
      product,
      setResult,
      searchValue,
      setSearchValue
   } = useProduct();

   const searchElem = (searchElem) => {
      setSearchValue(searchElem);
      if(searchValue !== '') {
         const filteredElems = product.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchValue.toLowerCase())
         })
         setResult(filteredElems);
         console.log(filteredElems);
      } else {
         setResult(product);
      }
   }

   useEffect(()=> {
      if(searchValue === '') {
         setResult(product)
      }
   }, [searchValue, product])

   return(
      <>
         <div className="main__search flex">
            <input className="main__search--input" 
            type="search" 
            onChange={(e) => searchElem(e.target.value)}
            placeholder="Поиск..."/>
            <div className="main__search--icon" />
         </div>
      </>
   )
}

export default Search;