import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import RightSideNav from '../../Shared/RightSideNav/RightSideNav';
import Course from './Course/Course';
import "./Courses.css"

const Courses = () => {
    const courses = useLoaderData()
    const [allCourses, setAllCourses] = useState(courses)
    const [category, setCategory] = useState(0)
    // console.log(category)
    // console.log(courses)
    
    const filterCourse = (cateId) => {
        setAllCourses(courses.filter(course => course.category === cateId))
    }


    // useEffect(() => {
    //     setAllCourses(courses.filter(course => course.category === category))
    // }, [category, courses])



    return (
        <div className='flex flex-col-reverse lg:flex-row justify-items-center  courseContainer'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-7 mt-8'>
            {
                allCourses?.map(course => 
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
                <RightSideNav filterCourse={filterCourse} />
            
            </div>
           
            </div>
    );
};

export default Courses;