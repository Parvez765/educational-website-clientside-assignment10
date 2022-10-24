import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Register = () => {
   const {handleCreateNewUser} = useContext(AuthContext)

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
            })
        .catch(error => console.log(error))
    }

    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-center">
                        <h1 className="text-4xl font-bold">WelCome To Academic Earth</h1>
                        <h2 className="text-2xl mt-3 font-bold">Please Register and Enjoy A Lot of Premium resouces</h2>
                       
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
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
                                <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                                </div>
                            </form>
                                <hr  className='mt-5'/>
                                <Link to="/login"><p className='mt-5 text-center'>New To This Accout. Please Register</p></Link>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Register;