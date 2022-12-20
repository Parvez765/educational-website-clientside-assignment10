import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";


const Course = () => {
    
    const courses = useLoaderData()
    
    const ref = React.createRef();

    return (
        <div>
            
            <div className='container ml-auto mr-auto mt-10 p-10' >
                <h2 className='text-center mb-8 text-2xl font-bold pt-8'>Details About : {courses.name}</h2>
                <div className="card bg-base-100 shadow-xl mx-auto" ref={ref}>
                    <figure><img src={courses.img} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            {courses.name}
                            <div className="badge badge-secondary">NEW</div>
                            </h2>
                                <p>{courses.details}</p>
                                <p>Course Price: {courses.price}</p>
                            <Link to={`/checkout/${courses.id}`}><button className="btn btn-link">Get Premium Access</button></Link>
                        </div>
                </div>
          
            </div>
                <div className=' flex justify-center mt-8'>
                    <Pdf targetRef={ref} filename="course-resources.pdf">
                        {({ toPdf }) => <button className='btn btn-primary' onClick={toPdf}>Generate Pdf</button>}
                    </Pdf>
                </div>
        </div>
    );
};

export default Course;