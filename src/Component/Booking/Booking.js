import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../dashboard/Sidebar'
import { useForm } from "react-hook-form";
import './Booking.css'
import { useHistory, useParams } from 'react-router';
import Payment from '../Payment/Payment';
import { UserContext } from '../../App';

const Booking = () => {
    const { title } = useParams()
    const [services, setServices] = useState({})
    const [bookingData, setBookingData] = useState(null);
    const [user, setUser] = useContext(UserContext)
    const [,,isAdmin, setIsAdmin] = useContext(UserContext);
    const history = useHistory()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
    useEffect(() => {
        fetch('https://immense-river-88635.herokuapp.com/service/' + title)
            .then(res => res.json())
            .then(data => {
                delete data._id;
                setServices(data);
            })
    },[title])
    console.log(services)

    const onSubmit = data => {
        setBookingData(data)
    };

    const handlePayentSuccess = PaymentId => {
        
        const orderDetails = {
            ...services,
            email:user.email,
            "status": 'PENDING',
            booking: bookingData,
            PaymentId,
            oederTime: new Date()
        }

        fetch('https://immense-river-88635.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data =>{
            if(data){
                setBookingData("")
             alert("your order successfully placed")
             history.push('/bookingList')
            }
        } )

    }

    return (
        <>

            <div className=" row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="container">
                    <div class="booking-form">
                        <div style={{ display: bookingData ? 'none' : 'block' }} className="col-md-10 ">
                            <h3 className="ml-5">Billing Details</h3>

                            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                                <div className="input-group">
                                    <input type="text" {...register("name", { required: true })} value={user?.userName} className="inp-style" />
                                    {errors.name && <span className="text-danger">This field is required</span>}
                                </div>

                                <div className="input-group">
                                    <input type="text" {...register("email", { required: true })} value={user?.email} className="inp-style" />
                                    {errors.email && <span className="text-danger">This field is required</span>}
                                </div>

                                <div className="input-group">
                                    <input type="text" {...register("service", { required: true })} value={title} className="inp-style" />
                                    {errors.service && <span className="text-danger">This field is required</span>}
                                </div>

                                <div className="input-group">
                                    <input type="number" {...register("phone", { required: true })} placeholder="Phone Number" className="inp-style" />
                                    {errors.phone && <span className="text-danger">This field is required</span>}
                                </div>

                                <div className="input-group">
                                    <input type="text" {...register("adress", { required: true })} placeholder="Adress" className="inp-style" />
                                    {errors.service && <span className="text-danger">This field is required</span>}
                                </div>

                                <div className="input-group text-right">

                            { title.length>7 ?  <button type="submit" className="btn btn-danger mt-3 ">Continue To Payment</button>:
                                        <p>Please Select Your Item</p>
                             } 
                                    
                                </div>
                            </form>
                        </div>

                        <div style={{ display: bookingData ? 'block' : 'none' }} className="col-6">
                            <h5 className="mt-3 mb-5">Your service charge will be ${services?.price}</h5>
                            <Payment handlePayment={handlePayentSuccess} />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Booking;