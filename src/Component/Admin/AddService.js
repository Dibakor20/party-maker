import React, { useState } from 'react';
import Sidebar from '../dashboard/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useHistory } from 'react-router';


const AddService = () => {
    const [imageUrl,setImageUrl] =useState(null)
    const history=useHistory()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        const serviceData ={
            title:data.title,
            price:data.price,
            subTitle:data.subTitle,
            imageUrl:imageUrl,
        }
        const url =`https://immense-river-88635.herokuapp.com/addService`
        console.log(serviceData)
        fetch(url, {
            method: 'POST', 
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
          })
          .then(res => {
            if(data){
              
              alert("Product added Successfully")
              history.push('/manageService')
            }
          })
    }
  

    const handleImageUpload = (event) =>{
        console.log(event.target.files[0])
        const imageData =new FormData()
        imageData.set('key', '70615785ffbafdc7dd120e546041a491')
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageUrl(response.data.data.display_url);
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
                   <h3>Add Services</h3>
               <form className="p-5" onSubmit={handleSubmit(onSubmit)}>

               <div className="input-group">
                        <input type="text" {...register("title", { required: true })} placeholder="Title" className="inp-style" />
                        {errors.title && <span className="text-danger">This field is required</span>}
                </div>

                <div className="input-group">
                        <input type="text" {...register("price", { required: true })} placeholder="Price" className="inp-style" />
                        {errors.price && <span className="text-danger">This field is required</span>}
                </div>

                <div className="input-group">
                        <input type="text" {...register("subTitle", { required: true })} placeholder="SubTitle" className="inp-style" />
                        {errors.subTitle && <span className="text-danger">This field is required</span>}
                </div>

                <input name="file"  type="file" onChange={handleImageUpload} /><br/>
                {errors.file && <span style={{color:'red'}}>This field is required</span>}<br/>

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

export default AddService;