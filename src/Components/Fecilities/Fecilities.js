import React from 'react';
import "./Facilities.css"
import facilitiesImg from "../../images/facilities-01.png"
import { facilities } from '../../data/facilities';

const Fecilities = () => {
    return (
        <div className='facilitiesBanner p-14' data-aos="zoom-in-up">
            <div className='container mx-auto text-center'>
                <h2 className='text-3xl lg:text-5xl font-bold'>What Will You Get</h2>
                <p className='lg:text-xl text-yellow-400 mb-10'>We includes Awesome Features For Our Students</p>
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-center'>
                <div className='mt-10 hidden lg:block'>
                    <img src={facilitiesImg} className="w-full lg:w-[1200px] lg:mr-36 mb-10" alt="" />
                </div>
                <div className='lg:-ml-[550px] lg:mb-[120px]'>
                    {
                        facilities?.map(facility => <>
                            <div className='flex items-center'>
                                <div>
                                    <img src={facility.icon} alt="" className='w-[80px] lg:mr-6 mb-6'/>
                                </div>
                                <div>
                                    <h2 className='text-2xl lg:text-3xl ml-6 mb-6'>{facility.name}</h2>
                                </div>
                            </div>
                        </>
                            
                        )
                    }
                </div>
            </div>
       </div>
    );
};

export default Fecilities;