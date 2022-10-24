import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from "../../images/headerlogo.png"

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <img className='w-12' src={headerLogo} alt="headerLogo"></img>
                <Link  to="/" className="btn btn-ghost normal-case text-xl">Academic Earth</Link>
                <Link  to="/courses" className="btn btn-ghost normal-case text-xl">Courses</Link>
                <Link  to="/faq" className="btn btn-ghost normal-case text-xl">FAQ</Link>
                <Link  to="/blog" className="btn btn-ghost normal-case text-xl">Blog</Link>
            </div>
        </div>
    );
};

export default Navbar;