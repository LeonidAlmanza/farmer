import React from "react";
import { useContext, createContext, useState, useEffect } from "react";


interface AuthProviderProps{
    children: React.ReactNode;
}

const AuthContext = createContext({
    isAuthenticated: false,
})

export default function AuthProvider({children}: AuthProviderProps){
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    return(
            <AuthContext.Provider value={{isAuthenticated}}>
                {children}
            </AuthContext.Provider>
    )
}

export const useAuth = ()=> useContext(AuthContext);