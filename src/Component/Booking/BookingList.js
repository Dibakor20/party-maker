import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../dashboard/Sidebar';

const BookingList = () => {
    const [userOrderList,setUserOrderList] =useState([])
    console.log(userOrderList)
    const [user,setUser] =useContext(UserContext)
    console.log(user.email)
    
    useEffect(()=>{
        fetch('https://immense-river-88635.herokuapp.com/userOrder?email='+ user.email)
        .then(res=>res.json())
        .then(data=>setUserOrderList(data))
    },[])
    return (
        <>
              <div className="row">
        <div className="col-md-2">
            <Sidebar/>
        </div>
        <div className="col-md-10">
          
        <table className="table">
                <thead id='thead' className="bg-light">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Service</th>
                        <th scope="col">Payment id</th>
                        <th scope="col">Status</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        userOrderList?.map(OrderItem =>
                            <tr key={OrderItem._id}>
                                <td>{OrderItem?.booking?.name}</td>
                                <td>{OrderItem?.booking?.email}</td>
                                <td>{OrderItem?.booking?.service}</td>
                                <td>{OrderItem?.PaymentId}</td>
                                <td>
                                {
                            OrderItem?.status === 'PENDING' ?
                                <button className="w-75 btn btn-secondary d-block mx-auto text-center  text-white font-weight-bold ">{OrderItem?.status}</button>
                                : OrderItem?.status === 'APPROVED' ?
                                    <button className="w-75 btn btn-primary d-block mx-auto text-center  text-white font-weight-bold ">{OrderItem?.status}</button>
                                      
                                    : OrderItem?.status === 'CANCELED' ?
                                        <button className="w-75 btn btn-danger d-block mx-auto text-center  text-white font-weight-bold ">{OrderItem?.status}</button>
                                                :
                                                <button className="w-75 btn btn-danger d-block mx-auto text-center  text-white font-weight-bold ">{OrderItem?.status}</button>
                        }    
                                </td>                         
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>     
        </div>  
        </>
    );
};

export default BookingList;