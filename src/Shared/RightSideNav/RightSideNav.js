import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RightSideNav = () => {
    const [categories, setCategories] = useState()
    // console.log(categories)
    useEffect(() => {
        fetch(`http://localhost:5000/category/:id`)
            .then(res => res.json())
        .then(data => setCategories(data))

    }, [])


    return (
        <div className='card w-96 bg-base-100 shadow-xl text-center mt-8'>
            {
                categories?.map(category => <Link to={`/category/${category.id}`}>
                    <p className='mt-6 mb-8'>{category.name}</p>
                </Link>)
           }
        </div>
    );
};

export default RightSideNav;