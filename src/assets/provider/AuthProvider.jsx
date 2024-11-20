import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContext = createContext()

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

    const createNewUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const authInfo={
        user,
        setUser,
        createNewUser
    }
    return (
       <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;