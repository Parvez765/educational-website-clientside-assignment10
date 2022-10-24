import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import RightSideNav from '../../Shared/RightSideNav/RightSideNav';
import Course from './Course/Course';
import "./Courses.css"

const Courses = () => {
    const courses = useLoaderData()
    // console.log(courses)
    
    return (
        <div className='flex gap-16 courseContainer'>
            <div className='grid lg:grid-cols-3 gap-10 mt-8'>
            {
                courses?.map(course => 
                    <div className=''>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img className='courseImg' src={course.img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            {course.name}
                            <div className="badge badge-secondary">NEW</div>
                            </h2>
                                <p>Rating: {course.rating}</p>
                            
                            <Link to={`/courses/${course.id}`}>
                                <button className="btn btn-primary w-72 mt-5">See Details</button>
                            </Link>
                            </div>
                    </div>
                    </div>
                )
            }
           </div>
           
          
            <div>
                <RightSideNav></RightSideNav>
            
            </div>
           
            </div>
    );
};

export default Courses;