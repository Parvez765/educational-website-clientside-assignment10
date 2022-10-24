import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = ( ) => {
    const courses = useLoaderData()
    console.log(courses)


    console.log()
    return (
        <div>
            {/* <div className="card w-96 bg-base-100 shadow-xl ">
                <figure><img src={courses.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div> 
                    <div className="badge badge-outline">Products</div>
                    </div>
            </div>
            </div> */}
        </div>
    );
};

export default Course;