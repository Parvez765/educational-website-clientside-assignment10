import React from 'react';
import bannerImage from "../../images/headerImage-01.png"

const HomeComponent = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-around items-center'>
                <div>
                    <h2>Access 1500+</h2>
                    <h2 className='text-4xl font-bold'>Online Tutorial From Top Instructors</h2>
                </div>
                <div>
                    <img src={bannerImage} alt="" className='w-[800px]'/>
                </div>
           </div>
        </div>
    );
};

export default HomeComponent;