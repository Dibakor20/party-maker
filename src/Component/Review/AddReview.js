import React, { useState } from 'react';
import Sidebar from '../dashboard/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useHistory } from 'react-router';

const AddReview = () => {
    const [image,setImage] =useState(null)
    const history = useHistory()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        const reviewData ={
            name:data.name,
            position:data.position,
            description:data.description,
            image:image,
        }
        const url =`https://immense-river-88635.herokuapp.com/addReview`
        console.log(reviewData)
        fetch(url, {
            method: 'POST', 
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
          })
          .then(res => {
            if(data){
              alert("Review added Successfully")
              history.push('/')
            }
          })
    }
  

    const handleImagebbUpload = (event) =>{
        console.log(event.target.files[0])
        const imageData =new FormData()
        imageData.set('key', '70615785ffbafdc7dd120e546041a491')
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImage(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <>
             <div className="row">
          <div className="col-md-2">
              <Sidebar/>
          </div>
           <div className="col-md-10">
               <div className="booking-form">
                   <h3>Add Review</h3>
               <form className="p-5" onSubmit={handleSubmit(onSubmit)}>

               <div className="input-group">
                        <input type="text" {...register("name", { required: true })} placeholder="Name" className="inp-style" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                </div>

                <div className="input-group">
                        <input type="text" {...register("position", { required: true })} placeholder="Position" className="inp-style" />
                        {errors.position && <span className="text-danger">This field is required</span>}
                </div>

                <div className="input-group">
                        <input type="text" {...register("description", { required: true })} placeholder="Description" className="inp-style" />
                        {errors.description && <span className="text-danger">This field is required</span>}
                </div>

                <input name="file"  type="file" onChange={handleImagebbUpload} /><br/>
                {errors.file && <span style={{color:'red'}}>This field is required</span>}<br/>

                <div className="input-group text-right">
                        <button type="submit" className="btn btn-danger mt-3">Add Review </button>
                    </div>
               </form>
               </div> 
           

           </div>
          </div>  
        </>
    );
};

export default AddReview;