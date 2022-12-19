import React from 'react';
import { Link } from 'react-router-dom';
import Mentoring from '../../Components/Mentoring/Mentoring';
import ServiceNumber from '../../Components/Mentoring/ServiceNumber/ServiceNumber';
import headerImage from "../../images/headerImage-01.png"
import gif from "../../images/RfmR.gif"

const Home = () => {
    return (
        <div>
            <div  className='flex items-center justify-around flex-col lg:flex-row p-6'>
                <div>
                    <img className='w-[750px] mb-14 mt-4 p-5' src={headerImage} alt=""></img>
                </div>
                <div>
                    <h2 className='text-5xl font-bold text-center lg:text-left'> Hello From <br></br>Academic Earth</h2>
                    <p className='mt-5 text-center lg:text-left'>Academic Earth is An Online Course Platfrom Who Serves Premium Content.</p>
                    <Link to="/courses">
                        <div className='flex justify-center lg:justify-start items-center'>
                            <button className='btn btn-primary mt-5'>Visit Our Courses</button>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='flex justify-around flex-col lg:flex-row items-center container mx-auto mt-14 mb-14'>
                <div className='flex justify-center items-center'>
                    <img src={gif} alt="" className='mb-14 hidden lg:block'/>
                </div>
                <div className='text-center lg:text-left'>
                    <h2 className='text-6xl font-bold mb-5'>About Us</h2>
                    <p className='text-bold text-lg p-4 lg:p-0'>We Are Academic Earth. We Provide Best quality Learning Material.<br/> You Can Check Our FAQ Section For More Details</p>
                    <Link to="/faq">
                        <button className='btn btn-primary mt-5'>Visit FAQ</button>
                    </Link>
                </div>
            </div>
            <Mentoring />
            <ServiceNumber/>
        </div>
    );
};

export default Home;