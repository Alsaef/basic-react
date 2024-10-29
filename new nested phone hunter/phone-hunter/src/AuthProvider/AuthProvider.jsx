/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';
import { getAuth, signInWithPopup,onAuthStateChanged,signOut  } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext=createContext(null)
const auth=getAuth(app)
const Provider=new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null)
    const [loding,setLoading]=useState(true)
    const SingInGoogle=()=>{
       return signInWithPopup(auth,Provider)
    }
    const SingOutGoogle=()=>{
       return signOut(auth)
    }
   useEffect(()=>{
     const unsubscript=onAuthStateChanged(auth,(currentUser=>{
        console.log(currentUser)
        setuser(currentUser)
        setLoading(false)
     }))
     return ()=>{
        return unsubscript
     }
   },[])
    const information={
        user,
        SingInGoogle,
        SingOutGoogle,
        loding
    }
    return (
        <div>
           <AuthContext.Provider value={information}>
           {children}
            </AuthContext.Provider> 
        </div>
    );
};

export default AuthProvider;