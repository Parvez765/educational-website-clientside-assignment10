import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    
    const courses = useLoaderData()
    console.log(courses.name)
   

    // const courses = useLoaderData()
    // console.log(courses)


    console.log()
    return (
        <div className='container ml-auto mr-auto mt-10'>
            <h2 className='text-center mb-8 text-2xl font-bold'>Details About : {courses.name}</h2>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={courses.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        {courses.name}
                        <div className="badge badge-secondary">NEW</div>
                        </h2>
                            <p>{courses.details}</p>
                            <p>Course Price: {courses.price}</p>
                        
                    </div>
                </div>
          
        </div>
    );
};

export default Course;