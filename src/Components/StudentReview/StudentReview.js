import React from 'react';
import { reviews } from '../../data/reviews';
import "./StudentReview.css"

const StudentReview = () => {
    return (
        <div className='bg-slate-800 mt-10'>
            <div className='container mx-auto p-16 lg:p-48 text-white flex flex-col lg:flex-row justify-around items-center text-center lg:text-left'>
                <div className='lg:mr-44 mb-14' data-aos="fade-up">
                    <h2 className='text-xl lg:text-3xl'>We Have Earned</h2>
                    <h2 className='text-6xl lg:text-[150px] font-bold text-yellow-300'>150+</h2>
                    <h2 className='text-xl lg:text-3xl'>Learners Review</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6' data-aos="fade-down">
                    {
                        reviews?.map(review => <>
                                <div className="card bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <img src={review.img} alt="" className='w-[100px] block mx-auto'/>
                                    <h2 className="text-2xl text-center mt-6 text-black font-bold">{review.name}</h2>
                                    <p className='text-black text-center'>{review.description}</p>
                                    <p className='text-black text-center font-bold'>Course Name: {review.coursename}</p>
                                    <p className='text-black text-center'>Ratings: {review.rating}</p>
                                    </div>
                                </div>
                        </>)
                    }
                </div>
            </div>
        </div>
    );
};

export default StudentReview;