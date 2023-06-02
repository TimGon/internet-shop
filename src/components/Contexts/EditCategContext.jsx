import React, { useContext, useState } from "react";

const EditCategContext = React.createContext();

export function useEditCateg() {
   return useContext(EditCategContext)
}

export function EditCategProvider({ children }) {
   const [idCateg, setIdCateg] = useState('');
   const [titleCateg, setTitleCateg] = useState('');
   const [categories, setCategories] = useState('');
   const [activeCateg, setActiveCateg] = useState(false);
   const [stateActive, setStateActive] = useState(true);

   const value = {
      idCateg,
      setIdCateg,
      titleCateg, 
      setTitleCateg,
      categories,
      setCategories,
      activeCateg,
      setActiveCateg,
      stateActive,
      setStateActive,
   }

   return (
      <EditCategContext.Provider value={value}>{children}</EditCategContext.Provider>
   )
}