import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import app from '../../firebase/firebase.init';
import { current } from 'daisyui/src/colors';

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    
    // Create New User
    const handleCreateNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleLogOut = () => {
        return signOut(auth)
    }

    // Login With Email And Password
    const handleEmailSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    // Login With Google
    const handleGoogleLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }


    // LoginWithGitHub
    const handleLoginWithGithub = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // UserSignOut
    const handleUserSignOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // User Profile Update
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    },[])

    const authInfo = {user, handleEmailSignIn, handleGoogleLogin, handleLoginWithGithub, handleUserSignOut, handleCreateNewUser, loading, updateUserProfile, handleLogOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;