import React, { createContext, useEffect, useState } from 'react';
import {getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import app from '../../firebase/firebase.init';
import { current } from 'daisyui/src/colors';

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

    // UserSignOut
    const handleUserSignOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    },[])

    const authInfo = {user, handleEmailSignIn, handleGoogleLogin, handleLoginWithGithub, handleUserSignOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;