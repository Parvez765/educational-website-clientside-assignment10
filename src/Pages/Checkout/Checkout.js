import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const completed = useLoaderData()
    console.log(completed)
    const { name, img, price, details, rating} = completed
    console.log(name)

    return (
        <div>
                <h2 className='text-center mb-12 mt-12 text-2xl font-bold'>Welcome to CheckOut Page</h2>
             <div className="card card-compact w-96 bg-base-100 shadow-xl mt-8 mb-8 mx-auto">
            
            <figure><img src={img} alt=""/></figure>
            <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <p>Rating: {rating}</p>
                    <p>Price: {price}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Proceed</button>
                <Link to="/courses"> <button className="btn btn-primary">Back To Courses</button></Link>
                </div>
            </div>
        </div>
       </div>
    );
};


export default Checkout;