import React, { useContext, useState } from "react";

const CategoryContext = React.createContext();

export function useCategory() {
    return useContext(CategoryContext)
}

export function CategoryProvider({ children }) {
    const [category, setCategory] = useState(null);
    const [stateCategAdd, setStateCategAdd] = useState(null);

    const value = {
        category,
        setCategory,
        stateCategAdd,
        setStateCategAdd
    }

    return (
        <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>
    )
}