import React, { createContext, useState } from 'react';
import {getAuth, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth"
import app from '../../firebase/firebase.init';

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    
    // Login With Email And Password
    const handleEmailSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    // Login With Google
    const handleGoogleLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }


    // LoginWithGitHub
    const handleLoginWithGithub = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const authInfo = {user, handleEmailSignIn, handleGoogleLogin, handleLoginWithGithub}

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;