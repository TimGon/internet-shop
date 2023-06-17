import React, { useContext, useState } from "react";

const EditProdContext = React.createContext();

export function useEditProd() {
   return useContext(EditProdContext)
}

export function EditProdProvider({ children }) {
   const [idProd, setIdProd] = useState('');
   const [titleProd, setTitleProd] = useState('');
   const [dscrProd, setDscrProd] = useState('');
   const [costProd, setCostProd] = useState('');
   const [categProd, setCategProd] = useState('');
   const [brandProd, setBrandProd] = useState('');
   const [titleImg, setTitleImg] = useState('');
   const [activeProd, setActiveProd] = useState(false);
   const [stateProdActive, setStateProdActive] = useState(true);

   const value = {
      idProd,
      setIdProd,
      titleProd, 
      setTitleProd,
      dscrProd,
      setDscrProd,
      costProd,
      setCostProd,
      categProd,
      setCategProd,
      brandProd,
      setBrandProd,
      titleImg,
      setTitleImg,
      activeProd,
      setActiveProd,
      stateProdActive,  
      setStateProdActive
   }

   return (
      <EditProdContext.Provider value={value}>{children}</EditProdContext.Provider>
   )
}