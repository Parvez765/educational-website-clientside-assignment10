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
        <div className='grid  grid-cols-1 lg:grid-cols-2 container mx-auto justify-center'>
            <div className='lg:w-[550px] p-10 sticky top-0' data-aos="fade-up">
                <RightSideNav filterCourse={filterCourse} />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 mt-8 p-10' data-aos="fade-right">
                {
                    allCourses?.map(course => 
                       
                        <div className="shadow-xl rounded-lg">
                            <figure><img className='courseImg w-full' src={course.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                {course.name}
                                {/* <div className="badge badge-secondary">NEW</div> */}
                                    </h2>
                                        <p>Rating: {course.rating}</p>
                                    
                                <div>
                                    <Link to={`/courses/${course.id}`}>
                                        <button className="btn btn-primary w-full mt-5">See Details</button>
                                    </Link>
                                    </div>
                                </div>
                        </div>
                      
                    )
                }
            </div>
           
        </div>
    );
};

export default Courses;