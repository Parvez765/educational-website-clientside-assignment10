import React from 'react';
import { Link } from 'react-router-dom';
import ExploreCourses from '../../Components/ExploreCourses/ExploreCourses';
import Fecilities from '../../Components/Fecilities/Fecilities';
import HomeComponent from '../../Components/HomeComponent/HomeComponent';
import JoinMentor from '../../Components/JoinMentor/JoinMentor';
import StudentCare from '../../Components/StudentCare/StudentCare';
import StudentReview from '../../Components/StudentReview/StudentReview';


const Home = () => {
    return (
        <div>
            <HomeComponent />
            <ExploreCourses />
            <Fecilities />
            <JoinMentor />
            <StudentReview />
            <StudentCare/>
        </div>
    );
};

export default Home;