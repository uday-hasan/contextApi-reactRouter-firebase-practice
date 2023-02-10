import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import auth from '../firebase/firebase.config'

export const UserAuthContext = createContext()
const AuthContext = ({ children }) => {
    const createNewAccount = async (email, password) => {
        return await createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password)
    }
    const value = { createNewAccount, logIn }
    return (
        <UserAuthContext.Provider value={value}>
            {
                children
            }
        </UserAuthContext.Provider>
    );
};

export default AuthContext;