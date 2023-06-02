import React, { useContext, useState } from "react";

const EditOrderContext = React.createContext();

export function useEditOrder() {
   return useContext(EditOrderContext)
}

export function EditOrderProvider({ children }) {
   const [idOrder, setIdOrder] = useState('');
   const [numberOrder, setNumberOrder] = useState('');
   const [titleOrder, setTitleOrder] = useState('');
   const [sumOrder, setSumOrder] = useState('');
   const [stateOrder, setStateOrder] = useState('Ожидание');
   const [activeOrder, setActiveOrder] = useState(false);
   const [condActive, setCondActive] = useState(false);

   const value = {
      idOrder,
      setIdOrder,
      titleOrder, 
      setTitleOrder,
      numberOrder,
      setNumberOrder,
      sumOrder,
      setSumOrder,
      stateOrder,
      setStateOrder,
      activeOrder,
      setActiveOrder,
      condActive,
      setCondActive
   }

   return (
      <EditOrderContext.Provider value={value}>{children}</EditOrderContext.Provider>
   )
}