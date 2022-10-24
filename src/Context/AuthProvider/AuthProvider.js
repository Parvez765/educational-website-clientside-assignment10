import React, { createContext, useState } from 'react';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import app from '../../firebase/firebase.init';

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    
    // Login With Email And Password
    const handleEmailSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const authInfo = {user, handleEmailSignIn}

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;