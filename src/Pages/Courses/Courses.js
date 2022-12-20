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
        <div className='flex flex-col-reverse justify-center items-center lg:items-start lg:flex-row gap-16 courseContainer w-full'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-8 p-10'>
                {
                    allCourses?.map(course => 
                       
                        <div className="shadow-xl rounded-lg">
                            <figure><img className='courseImg' src={course.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                {course.name}
                                <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                        <p>Rating: {course.rating}</p>
                                    
                                    <Link to={`/courses/${course.id}`}>
                                        <button className="btn btn-primary w-full mt-5">See Details</button>
                                    </Link>
                                </div>
                        </div>
                      
                    )
                }
            </div>
                <div className='w-full p-10'>
                    <RightSideNav filterCourse={filterCourse} />
                </div>
           
            </div>
    );
};

export default Courses;