import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config'

export const UserAuthContext = createContext()
const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const createNewAccount = async (email, password) => {
        setLoading(true)
        return await createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = async (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe();
    }, [])
    const googleSignIn = async () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    const logOut = async () => {
        await signOut(auth)
    }
    const value = { createNewAccount, logIn, user, googleSignIn, logOut, loading }
    return (
        <UserAuthContext.Provider value={value}>
            {
                children
            }
        </UserAuthContext.Provider>
    );
};

export default AuthContext;