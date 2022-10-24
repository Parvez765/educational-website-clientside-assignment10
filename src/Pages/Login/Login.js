import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
    const googleProvider = new GoogleAuthProvider()

    const { user, handleEmailSignIn, handleGoogleLogin } = useContext(AuthContext)
    console.log(user)
    const handleFormSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        handleEmailSignIn(email, password)
            .then(result => {
            console.log("User Signed In")
            })
        .catch(error => console.error(error))
    }
    
    const loginWithGoogle = () => {
        handleGoogleLogin(googleProvider)
            .then((result) => {
            console.log("Logged In Successfully")
            })
        .catch(error =>  console.error(error))
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Login!</h1>
                    
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleFormSubmit}>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                            </label>
                            </div>
                            <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                    <FaGoogle onClick={loginWithGoogle} className='mt-5 ml-auto mr-auto'></FaGoogle>
                                </div>
                                <Link><p className='mt-5'>New To This Accout. Please Register</p></Link>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;