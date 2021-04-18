import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <>
        <div className="container banner">
        <h3 className="text-center font-family text-white">Parties & Event With</h3>
        <h1 className="text-center text-white">Personalize Fun</h1>   
        <p className="text-center text-white">an activity that is planned for a special purpose and usually involves a lot of people,<br/> for example,a meeting, party, trade show, or conference</p> 
        <button className="btn btn-danger d-block mx-auto px-5">See Parties</button>
        </div>    
        </>
    );
};

export default Banner;