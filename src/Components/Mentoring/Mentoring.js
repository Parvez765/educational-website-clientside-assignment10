import React from 'react';
import consultuncy from "../../images/consultancy.png"
import education from "../../images/education.png"
import bestOutput from "../../images/bestOutput.png"

const services = [
    {
        "id": 1,
        "img" : consultuncy,
        "name": "Consultant support",
        "description" : "We Give Your Childern Counsultant Support Which Will Make Him More Confident"
    },
    {
        
        "id": 2,
        "img" : education,
        "name": "Group Learning",
        "description" : "Learning With A Group Will Give Home More Confident"
    },
    {
        
        "id": 3,
        "img" : bestOutput,
        "name": "Think Out of Box",
        "description" : "With Our Guideline Thinking Ability of Your Child Will Grow Up"
    },
]

const Mentoring = () => {
    return (
        <div className='container  mx-auto text-center mt-24 p-6'>
            <h2 className='text-xl font-semibold'>How We Care For Our Students </h2>
            <h2 className='text-5xl font-bold'>Mentoring Flow </h2>

            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center justify-center items-center mt-14'>
                {
                    services.map(service => <>
                        <div className="card w-96 text-primary-content shadow-xl p-6">
                            <div className="card-body hover:-mt-10 cursor-pointer">
                                <div className='flex justify-center items-center'>
                                    <img src={service.img} alt="" className='w-[150px] '/>
                                </div>
                                <h2 className="text-center text-3xl font-bold">{service.name}</h2>
                                <p>{service.description}</p>
                                {/* <div className="card-actions justify-end">
                                <button className="btn">Buy Now</button>
                                </div> */}
                            </div>
                        </div>
                    </>)
                }
            </div>

        
        </div>
    );
};

export default Mentoring;