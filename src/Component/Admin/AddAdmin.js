import React from 'react';
import Sidebar from '../dashboard/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => {
        const adminData ={
            email:data.email,    
        }
        const url =`https://immense-river-88635.herokuapp.com/addAdmin`
        console.log(adminData)
        fetch(url, {
            method: 'POST', 
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(adminData)
          })
          .then(res => {
            if(data){
              alert("admin added Successfully")
              
            }
          })
    }
    return (
        <>
            <div className="row">
          <div className="col-md-2">
              <Sidebar/>
          </div>
           <div className="col-md-10">
               <div className="booking-form">
                   <h3>Make Admin</h3>
               <form className="p-5" onSubmit={handleSubmit(onSubmit)}>

                <div className="input-group">
                        <input type="email" {...register("email", { required: true })} placeholder="Email" className="inp-style" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                </div>
                
                <div className="input-group text-right">
                        <button type="submit" className="btn btn-danger mt-3">Add </button>
                    </div>
               </form>
               </div> 
           

           </div>
          </div>   
        </>
    );
};

export default AddAdmin;