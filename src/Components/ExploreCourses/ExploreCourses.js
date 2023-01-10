import React from 'react';
import "./ExploreCourses.css"
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Courses from '../Courses/Courses';

const ExploreCourses = () => {
    return (
        <div className='courseContainer'>
            <div className='container mx-auto mt-16'>
                <div className='flex flex-col lg:flex-row items-center justify-between'>
                    <div>
                        <h2 className='text-3xl lg:text-5xl font-bold p-10'>Explore <br /> <span className='text-emerald-600'>Our Courses</span></h2>
                    </div>
                    <Link to="/courses">
                        <div className='flex items-center'>
                            <h2>View All Courses</h2>
                            <FaArrowRight className='ml-2'/>
                        </div>
                    </Link>
                </div>
            </div>
            <Courses/>
       </div>
    );
};

export default ExploreCourses;