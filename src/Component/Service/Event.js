import React, { useContext, useEffect } from 'react';
import './Event.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { AnimationWrapper } from 'react-hover-animation'

const Event = (props) => {
    const{imageUrl,title,price,subTitle} = props.party
    const [user,setUser] = useContext(UserContext)
    const [,,isAdmin, setIsAdmin] = useContext(UserContext);
  
 
  
    return (
        <>
           <div class="card">
           <AnimationWrapper>
            <img src={imageUrl} class="card-img" alt="..."/>
            </AnimationWrapper>
            <div class="card-body ">
                <h5 class="card-title">{title}</h5>
                <h6 class="card-subtitle mb-2">$ {price}</h6>
                <p class="card-text">{subTitle}</p>


                <div> {
                    isAdmin ?<Link to="/orderList"><button className="btn btn-primary">Get Started</button></Link>:
                    <Link to={`/booking/${title}`}>  <button className="btn btn-primary">Get Started</button> </Link>
                }</div> 

            </div>
            </div> 
        </>
    );
};

export default Event;