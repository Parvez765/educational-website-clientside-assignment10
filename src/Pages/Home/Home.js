import React from 'react';
import { Link } from 'react-router-dom';
import ExploreCourses from '../../Components/ExploreCourses/ExploreCourses';
import Fecilities from '../../Components/Fecilities/Fecilities';
import HomeComponent from '../../Components/HomeComponent/HomeComponent';


const Home = () => {
    return (
        <div>
            <HomeComponent />
            <ExploreCourses />
            <Fecilities/>
        </div>
    );
};

export default Home;