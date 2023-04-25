import React, { useContext, useState } from "react";

const ProductContext = React.createContext();

export function useProduct() {
   return useContext(ProductContext)
}

export function ProductProvider({ children }) {
   const [product, setProduct] = useState(null);

   const value = {
      product,
      setProduct,
   }

   return (
      <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
   )
}