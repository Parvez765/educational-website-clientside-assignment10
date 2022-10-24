import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from "../../images/404image_Artboard 1.png"

const Error = () => {
    return (
        <div>
            <img className='w-[950px] mx-auto' src={errorImage} alt=""></img>
            <Link to="/"><button className="btn btn-active btn-link block mx-auto mt-[-100px]">Go To Home</button></Link>
        </div>
    );
};

export default Error;