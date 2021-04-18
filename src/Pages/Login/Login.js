import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import Header from '../../Component/Header/Header';
import { handleGoogleSignIn, initializeLoginFramwork } from './Auth';
import './Login.css'

const Login = () => {
    initializeLoginFramwork()
    const [user,setUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    
    const googleSignIn = ()=>{
        handleGoogleSignIn()
        .then(res=>{
          handleResponse(res,true)
        }) 
  }
  const handleResponse=(res,redirect)=>{
    setUser(res)
    
    if(redirect){
        history.replace(from)
    }
}
    return (
        <>
            <Header/>
            <div className="login">
                <h3 className="text-center">Login With</h3>
           <div onClick={googleSignIn} className="social-login d-flex justify-content-around align-items-center mt-3">
                <span>Continue With Google</span>
                </div> 
                </div>
        </>
    );
};

export default Login;