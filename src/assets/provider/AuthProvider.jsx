import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config'

export const AuthContext = createContext()

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading]= useState(true)
    console.log(loading,user)

    // registration
    const createNewUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // LogIn
    const userLogin=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile=(updatedData)=>{
        return updateProfile(auth.currentUser, updatedData)
    }

    const authInfo={
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loading,
        updateUserProfile,
    }
// observer er maddhome user k dhore rakhi or clean up kori
    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
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