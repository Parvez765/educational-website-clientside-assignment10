import React from 'react';

const StudentCare = () => {
    return (
        <div className='container mx-auto text-center  bg-cyan-700 p-14 lg:p-24 -mt-36 rounded-lg' data-aos="fade-up"
        data-aos-duration="1000">
            <h2 className='text-white text-3xl lg:text-5xl font-bold'>Need Student Care Support</h2>
            <button className='btn btn-warning mt-4 mr-6'>Call Us</button>
            <button className='btn btn-outline mt-4'>Message Us</button>
        </div>
    );
};

export default StudentCare;