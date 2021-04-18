import React from 'react';
import Banner from '../../Component/Banner/Banner';
import Contact from '../../Component/Contact/Contact';
import Decoration from '../../Component/Decoration/Decoration';
import Feature from '../../Component/Feature/Feature';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import Review from '../../Component/Review/Review';
import Service from '../../Component/Service/Service';
import './Home.css'

const Home = () => {
    return (
        <>
         <div className="header-background">
            <Header/>
            <Banner/> 
        </div> 
            <Service/>
            <Feature/>
            <Review/>
            <Decoration/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;