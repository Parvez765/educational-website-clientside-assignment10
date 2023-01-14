import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState("")
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    
    const { handleCreateNewUser,handleGoogleLogin, handleLoginWithGithub, updateUserProfile } = useContext(AuthContext)
    

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, photo, email, password)

        handleCreateNewUser(email, password)
            .then(result => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Thanks For The Registration',
                    showConfirmButton: false,
                    timer: 1500
                })
                handleUpdateUserProfile(photo, name)
            })
        .catch(error => setError(error))
    }

    const handleUpdateUserProfile = (photo, name) => {
        const profile = {
            photoURL: photo,
            displayName : name
        }
        updateUserProfile(profile)
            .then(() => {
            console.log("User Updated")
            })
        .catch(error =>setError(error))
    }

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
            })
        .catch(error=> setError(error))
    }

    return (
        <div className='container mx-auto p-6'>
           <div className="">
            <div className="flex-col mt-6">
                    <div className="text-center lg:text-center">
                        <h1 className="text-3xl lg:text-4xl font-bold">WelCome To Academic Earth</h1>
                        <h2 className="text-2xl mt-3 font-bold mb-10">Please Register and Enjoy A Lot of Premium resouces</h2>
                       
                        </div>
                        <div className="lg:w-[450px] block mx-auto rounded-lg shadow-2xl bg-base-100">
                        <div className="card-body  p-6">
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name="name" placeholder="full name" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="photourl" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                                <label className="label">
                                    {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                                </label>
                                </div>
                                <p>{error.message}</p>
                                <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                                </div>
                                <div className=''>
                                        <div>
                                            <FaGoogle onClick={loginWithGoogle} className='mt-5 ml-auto mr-auto'></FaGoogle>
                                        </div>
                                        <div>
                                            <FaGithub onClick={logInWithGithub} className='mt-5 ml-auto mr-auto'></FaGithub>
                                        </div>
                                </div>
                        
                        
                            </form>
                                 <p className='text-center font-bold text-red-800'>{error.message}</p>  
                                <hr  className='mt-5'/>
                                <Link to="/login"><p className='mt-5 text-center'>Already Have An Account? Please Login</p></Link>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Register;