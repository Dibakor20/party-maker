import React, { useContext, useDebugValue, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Sidebar.css'

const Sidebar = () => {
    const [user,setUser] = useContext(UserContext)
    const [,,isAdmin, setIsAdmin] = useContext(UserContext);
    
    useEffect(() => {
        fetch('https://immense-river-88635.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    return (
        <>
        <nav class="navbar navbar-expand-lg sidebar col-md-2">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="list-unstyled">
          
           {
               isAdmin ?
               <div>
               <li >
               <Link class="nav-link text-white" to="/orderList"><i class="fas fa-cart-plus"></i> Order List</Link>
           </li>
           <li >
               <Link to="/addService" class="nav-link text-white " ><i class="fas fa-plus-square"></i> Add Service </Link>
           </li>
           <li >
               <Link  class="nav-link text-white " to="/manageService"><i class="far fa-cog"></i> Manage Service</Link>
           </li>
           <li >
               <Link class="nav-link text-white" to="/addAdmin"><i class="fal fa-user"></i> Make Admin </Link>
           </li>
           <li >
                <Link to="/home" class="nav-link text-white "><i class="fad fa-home"></i> Home</Link>
            </li>
           </div>
             :
             <div>
            <li >
                <Link to="/booking/:title" class="nav-link text-white"><i class="fas fa-plus-square"></i> Book</Link>
            </li>
            <li >
                <Link class="nav-link text-white " to="/bookingList"><i class="fas fa-cart-plus"></i> Booking List</Link>
            </li>
            <li >
                <Link class="nav-link text-white" to="/addReview"><i class="far fa-comments-alt"></i> Review</Link>
            </li>
            
            <li >
                <Link to="/home" class="nav-link text-white"><i class="fad fa-home"></i> Home</Link>
            </li>
           </div>
           }
           
             
          
            </ul>
        </div>
        </nav>
        </>
    );
};

export default Sidebar;