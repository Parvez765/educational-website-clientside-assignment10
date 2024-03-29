import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";
import Swal from 'sweetalert2';

const Login = () => {

    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const { user, handleEmailSignIn, handleGoogleLogin, handleLoginWithGithub } = useContext(AuthContext)
    
    // Login With Email and Password

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        handleEmailSignIn(email, password)
            .then(result => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Successfull',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, {replace: true})
            })
        .catch(error => setError(error))
    }
    

    // Google Login Functionality
    const loginWithGoogle = () => {
        handleGoogleLogin(googleProvider)
            .then((result) => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Google Login Successfull',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, {replace: true})
            })
        .catch(error =>  setError(error))
    }


    // Github Login Functionality
    const logInWithGithub = () => {
        handleLoginWithGithub(githubProvider)
            .then(result => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'GitHub Login Successfull',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, {replace: true})
            })
        .catch(error=> setError(error))
    }

    return (
        <div className='container mx-auto p-6'>
            <div className="mt-14 mb-14">
                <div className="">
                    <div>
                        <h1 className='text-center mb-10 text-3xl lg:text-4xl font-bold'>Please Login</h1>
                    </div>
                        
                    <div className="rounded-lg shadow-2xl bg-base-100 lg:w-[450px] block mx-auto">
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
                                {/* <p>{error.message}</p> */}
                            <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                    <div className='ml-auto mr-auto flex gap-5'>
                                        <div>
                                            <FaGoogle onClick={loginWithGoogle} className='mt-5 ml-auto mr-auto'></FaGoogle>
                                        </div>
                                        <div>
                                            <FaGithub onClick={logInWithGithub} className='mt-5 ml-auto mr-auto'></FaGithub>
                                        </div>
                                   </div>
                                </div>
                                <p className='text-center font-bold text-red-800'>{error.message}</p>  
                                <hr  className='mt-5'/>
                                <Link to="/register"><p className='mt-5 text-center'>New To This Accout. Please Register</p></Link>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;