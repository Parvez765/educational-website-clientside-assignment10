import React from 'react';
import { Link } from 'react-router-dom';
import headerImage from "../../images/headerImage-01.png"

const Home = () => {
    return (
        <div>
            <div  className='flex items-center justify-around flex-col lg:flex-row'>
                <div>
                    <img className='w-[750px] mb-14 mt-4 p-5' src={headerImage} alt=""></img>
                </div>
                <div>
                    <h2 className='text-5xl font-bold text-center lg:text-left'> Hello From <br></br>Academic Earth</h2>
                    <p className='mt-5'>Academic Earth is An Online Course Platfrom Who Serves Premium Content.</p>
                    <Link to="/courses">
                        <div className='flex justify-center lg:justify-start items-center'>
                            <button className='btn btn-primary mt-5'>Visit Our Courses</button>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='text-center mt-20'>
                <h2 className='text-3xl font-bold mb-5'>About Us</h2>
                <p className='text-bold text-lg'>We Are Academic Earth. We Provide Best quality Learning Material.<br></br> You Can Check Our FAQ Section For More Details</p>
                <Link to="/faq">
                    <button className='btn btn-primary mt-5'>Visit FAQ</button>
                    </Link>
            </div>
        </div>
    );
};

export default Home;