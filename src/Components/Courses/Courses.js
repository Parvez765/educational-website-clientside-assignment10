import React from 'react';
import { courses } from '../../data/courses';
import CoursesCard from '../CoursesCard/CoursesCard';
import "./Courses.css"

const Courses = () => {
    return (
        <div data-aos="fade-left">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto p-6 lg:p-14'>
                {
                    courses?.map(course => <CoursesCard key={course.id} course={course} />)
                }
           </div>
        </div>
    );
};

export default Courses;