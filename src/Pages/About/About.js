import React from 'react';
import picture from "../../images/myPicture.jpg"

const About = () => {
    return (
        <div className='container mx-auto lg:mt-14 p-6'>
            <div className='flex flex-col lg:flex-row justify-around items-center'>
                <div className='mt-12'>
                    <h2 className='text-4xl text-left  font-bold'>About Academic Earth</h2>
                    <p className='text-xl  mt-4 lg:w-[900px] bolck mx-auto'>Hello People, Academic Earth is An Educational Platform. EdTech, short for education technology, refers to new technological implementations in the classroom. In-classroom tablets, interactive projection screens and whiteboards, online content delivery, and MOOCs are all examples of EdTech.</p>
                </div>
                <div className='text-center mt-10 '>
                  
                    <div className='container mx-auto flex justify-center items-center flex-col shadow-lg p-10 rounded-lg'>
                        <div>
                            <img src={picture} className="w-[150px] rounded-full mb-4" alt="" />
                        </div>
                        <div>
                            <h2 className='text-xl font-bold'>Md. Parvez Hossain Sakib</h2>
                            <h2>Junior Web Developer</h2>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default About;