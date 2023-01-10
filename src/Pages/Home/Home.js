import React from 'react';
import { Link } from 'react-router-dom';
import ExploreCourses from '../../Components/ExploreCourses/ExploreCourses';
import HomeComponent from '../../Components/HomeComponent/HomeComponent';


const Home = () => {
    return (
        <div>
            <HomeComponent />
            <ExploreCourses/>
        </div>
    );
};

export default Home;