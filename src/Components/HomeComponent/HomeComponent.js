import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from "../../images/headerImage-01.png"
import "./HomeComponent.css"

const HomeComponent = () => {
    return (
        <div className='bannerContainer'>
            <div className='container mx-auto mt-8 p-6'>
                <div className='flex flex-col justify-around items-center'>
                    <div className='text-center'>
                        <h2 className='text-2xl font-bold mb-4'>Welcome to Academic Earth</h2>
                        <h2 className='text-3xl lg:text-5xl font-bold text-rose-500 lg:w-[750px]'>Access 1500+ Online Tutorial From Top Instructors</h2>
                        <p className='text-xl font-bold mt-4'>A Complete E-Learning Managment Solution</p>
                    <Link to="/courses"><button className='btnPrimary'>View All Courses</button></Link>
                    
                    </div>
                    {/* <div>
                        <img src={bannerImage} alt="" className='w-[800px] mt-8'/>
                    </div> */}
            </div>
            </div>
        </div>
    );
};

export default HomeComponent;