import React, { useContext, useState } from "react";

const ProductContext = React.createContext();

export function useProduct() {
   return useContext(ProductContext)
}

export function ProductProvider({ children }) {
   const [product, setProduct] = useState(null);
   const [result, setResult] = useState([]);
   const [searchValue, setSearchValue] = useState("");
   const [categ, setCateg] = useState('');
   const [stateCreate, setStateCreate] = useState(false);
   const [active, setActive] = useState(true);
   const [arrVal, setArrVal] = useState([1000, 250000])

   const value = {
      product,
      setProduct,
      result, 
      setResult,
      searchValue,
      setSearchValue,
      categ,
      setCateg,
      stateCreate,
      setStateCreate,
      active,
      setActive,
      arrVal,
      setArrVal
   }

   return (
      <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
   )
}