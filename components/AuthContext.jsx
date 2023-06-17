import React, { useContext, useState } from "react";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [authUser, setAuthUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [status, setStatus] = useState(null);

    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn,
        status,
        setStatus
    }

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}