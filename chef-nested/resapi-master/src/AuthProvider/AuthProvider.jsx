/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup ,onAuthStateChanged,signOut  } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext=createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
     const[user,setuser]=useState(null)
     const [loding,setloging]=useState(true)
const creatAccount = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
 }
 const loginAccount=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
 }

 const loginGoogle=()=>{
     return signInWithPopup(auth,provider)
 }
const logOut=()=>{
    return signOut(auth)
}
 useEffect(()=>{
    const unsunscribe = onAuthStateChanged (auth,(currentUser)=>{
        console.log(currentUser)
        setuser(currentUser)
        setloging(false)
    })
    return ()=>{
        return unsunscribe
    }
 },[])
    // user data context
    const authInfo={
        user,
        creatAccount,
        loginAccount,
        loginGoogle,
        logOut,
        loding
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;