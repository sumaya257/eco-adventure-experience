import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config'

export const AuthContext = createContext()

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    console.log(user)

    const createNewUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    const logOut=()=>{
        return signOut(auth)
    }

    const authInfo={
        user,
        setUser,
        createNewUser,
        logOut
    }
// observer er maddhome user k dhore rakhi or clean up kori
    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
          })
          return () =>{
            unsubscribe()
          }

    },[])

    return (
       <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;