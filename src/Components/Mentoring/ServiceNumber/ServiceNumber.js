import React from 'react';

const ServiceNumber = () => {
    return (
        <div className='p-6'>
            <div className='text-center mt-20 container mx-auto bg-slate-700 p-24 rounded-lg text-white'>
                <div className='flex justify-around items-center flex-col lg:flex-row gap-10'>
                    <div>
                        <h2 className='text-6xl font-bold'>95%</h2>
                        <h2 className='text-xl font-semibold'>Student Success</h2>
                    </div>
                    <div>
                        <h2 className='text-6xl font-bold'>120+</h2>
                        <h2 className='text-xl font-semibold'>Expert Teachers</h2>
                    </div>
                    <div>
                        <h2 className='text-6xl font-bold'>5600+</h2>
                        <h2 className='text-xl font-semibold'>Consultant Support</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceNumber;