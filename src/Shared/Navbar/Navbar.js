import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import headerLogo from "../../images/headerlogo.png"
import { FaSearch } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import "./Navbar.css"

const Navbar = () => {
    const [showName, setShowName] = useState("")
    console.log(showName)
    
    const { user, handleUserSignOut } = useContext(AuthContext)
    console.log(user)
    const [dark, setDark] = useState(false)

    const userSignedOut = () => {
        handleUserSignOut()
            .then(() => {
            
            })
        .catch(error => console.log)
    }

    

    return (
        <div data-theme={dark ? "black" : "light"}>
           <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link  to="/" className="btn btn-ghost normal-case text-xl">Home</Link>
                        <Link  to="/courses" className="btn btn-ghost normal-case text-xl">Courses</Link>
                        <Link  to="/faq" className="btn btn-ghost normal-case text-xl">FAQ</Link>
                        <Link to="/blog" className="btn btn-ghost normal-case text-xl">Blog</Link>
                        <Link to="/blog" className="btn btn-ghost normal-case text-xl">Contact</Link>
                      
                    </ul>
                    </div>
                    <img src={headerLogo} alt="" className='w-[50px]'/>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <Link  to="/" className="btn btn-ghost normal-case text-xl">Home</Link>
                    <Link  to="/courses" className="btn btn-ghost normal-case text-xl">Courses</Link>
                    {/* <Link  to="/faq" className="btn btn-ghost normal-case text-xl">FAQ</Link> */}
                        <Link to="/blog" className="btn btn-ghost normal-case text-xl">Blog</Link>
                        <Link to="/blog" className="btn btn-ghost normal-case text-xl">Contact</Link>
                       
                    </ul>
                </div>
                <div className="navbar-end">
                    <FaSearch className='absolute -ml-24 mr-6'/>
                    <input type="text" placeholder="Search" className="input input-bordered input-primary" />
                {/* <div className="tooltip tooltip-bottom ml-[1200px]" data-tip={showName}>
                    {
                        user ? <img className='userPhoto' onMouseOver={()=> setShowName(user?.displayName)} src={user.photoURL} alt=""></img> : <FaUser className='ml-[1200px]'></FaUser>
                    }
                </div> */}
                    {/* {
                        user?.uid ?  <Link to="/login" onClick={userSignedOut} className="btn btn-ghost normal-case text-xl ml-3">Logout</Link> :  <Link to="/login" className="btn btn-ghost normal-case text-xl ml-3">Login</Link> 
                    } */}
                </div>
            </div>

        </div>
    );
};

export default Navbar;