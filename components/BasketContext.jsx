import React, { useContext, useState } from "react";

const BasketContext = React.createContext();

export function useBasket() {
    return useContext(BasketContext)
}

export function BasketProvider({ children }) {
    const [basket, setBasket] = useState([]);

    const addBasket = (product) => {
            setBasket(prev=>[...prev, {
                ...product,
                count: 1
            }])
        
    }

    const addCount = (id) => {
        setBasket(prev => prev.map(item => {
            if(item.id === id){ 
                return {...item, count: item.count + 1}
            } else {
                return item;
            }
        }))
    }
    
    const removeCount = (id) => {

        let count = basket.find(item => item.id === id).count;
    
        if(count === 1) {
            setBasket(prev => prev.filter(item => item.id !== id))
        } else {
            setBasket(prev => prev.map(item => {
                if(item.id === id) {
                    return {...item, count:item.count - 1}
                } else {
                    return item;
                }
            }))
        }

    }

    const totalCost = (items) => {
        return items.reduce((acc, curr) => acc + curr.count * curr.cost_product, 0);
    }
    

    const value = {
        basket,
        addBasket,
        addCount,
        removeCount,
        totalCost
    }

    return (
        <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
    )
}