import React, { createContext } from 'react';

export const AuthContext = createContext()

const AuthPrvider = ({ children }) => {
    
    const user = {displayName : "sakib"}
    const authInfo = {}

    return (
        <AuthContext.Provider value={authInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthPrvider;