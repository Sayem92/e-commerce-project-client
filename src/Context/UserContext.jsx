import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app);




const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // create new user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user sign in
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // user name update
    const updateName = (profile) =>{
         setLoading(true);
        return updateProfile(auth.currentUser, profile)
    }

    const logOut = () =>{
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside auth state change')
             setUser(currentUser)
            setLoading(false)
        })

        return () => unSubscribe();

    }, [])

    const authInfo = { 
        user,
        loading,
        setLoading, 
        setUser,
        createUser, 
        signIn,
        updateName,
        logOut,

    }

    return (    
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>     
    );
};

export default UserContext;