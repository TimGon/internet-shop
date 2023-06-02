import React, { useContext, useState } from "react";

const OrderContext = React.createContext();

export function useOrder() {
    return useContext(OrderContext)
}

export function OrderProvider({ children }) {
   const [order, setOrder] = useState(''),
         [cost, setCost] = useState(0),
         [number, setNumber] = useState([]),
         [nameUser, setNameUser] = useState([]);

    const value = {
      order,
      setOrder,
      cost,
      setCost,
      number,
      setNumber,
      nameUser,
      setNameUser
    }

    return (
        <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
    )
}