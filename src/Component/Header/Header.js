import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
    const [user,setUser] = useContext(UserContext)
    const [,,isAdmin, setIsAdmin] = useContext(UserContext);
    
    return (
        <>
           <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light ">
            <a class="navbar-brand " href="#">Party Maker</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ml-auto">
                <Link  class="nav-link header-nav mr-3 " to="/home">Home </Link>
                <a class="nav-link header-nav mr-3  " href="#event">Event</a>
                <a class="nav-link header-nav mr-3 " href="#review">Review</a>
          
              {user.email && <div> {
                    isAdmin ?<Link to="/orderList" class="nav-link header-nav mr-3 ">Dashboard</Link>:
                    <Link to="/bookingList" class="nav-link header-nav mr-3 ">Dashboard</Link>
                }</div> }
           
                {
                user?.email ? <button className="btn log" >{user?.email}</button> : <Link className="btn log " to="/login">LogIn</Link>
                }
               
                </div>
            </div>
            </nav>
            </div> 
        </>
    );
};

export default Header;