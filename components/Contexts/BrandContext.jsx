import React, { useContext, useState } from "react";

const BrandContext = React.createContext();

export function useBrand() {
    return useContext(BrandContext)
}

export function BrandProvider({ children }) {
   const [brand, setBrand] = useState([]);

    const value = {
      brand,
      setBrand
    }

    return (
        <BrandContext.Provider value={value}>{children}</BrandContext.Provider>
    )
}