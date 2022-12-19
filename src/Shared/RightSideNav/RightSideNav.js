import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RightSideNav = ({filterCourse}) => {
    
    const [categories, setCategories] = useState()
    // console.log(categories)
    useEffect(() => {
        fetch(`https://assignment10-educationalwebsite-serverside.vercel.app/category/:id}`)
            .then(res => res.json())
        .then(data => setCategories(data))

    }, [])

    return (
        
            <div className='card w-96 bg-base-100 shadow-xl text-center mt-8'>
                {
                    categories?.map(category => 
                        <p onClick={()=>  filterCourse(category.id)} className='mt-6 mb-8'>{category.name}</p>
                )
            }
            </div>
        
    );
};

export default RightSideNav;