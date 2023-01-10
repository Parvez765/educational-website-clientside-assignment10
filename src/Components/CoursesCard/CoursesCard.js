import React from 'react';

const CoursesCard = ({ course }) => {
    const {name, icon, description} = course
    return (
        <div>
            <div className="flex md:h-[150px] items-center bg-base-100 rounded-lg shadow-xl">
                <div>
                    <img src={icon} alt="" className='w-[200px] lg:w-[130px] p-5'/>
                </div>
                <div className="card-body">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <p>{description}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default CoursesCard;