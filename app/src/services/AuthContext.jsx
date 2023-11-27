import {createContext, useState, useEffect} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState("loading")

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        })
    }, [])

    return (
        <AuthContext.Provider value={currentUser}>
            {children}
        </AuthContext.Provider>
    );
};