import React, { useEffect, useState } from 'react';
import Sidebar from '../dashboard/Sidebar';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const OrderList = () => {
    const [orderList,setOrderList] =useState([])
    const options = [
        { value: 'PENDING', label: 'PENDING' },
        { value: 'APPROVED', label: 'APPROVE' },
        { value: 'CANCELED', label: 'CANCELED' },
    ];
  
    useEffect(()=>{
        fetch('https://immense-river-88635.herokuapp.com/orderDetails')
        .then(res=>res.json())
        .then(data=>setOrderList(data))
    },[])

    const handleStatusChange = (e,id) => {
        fetch(`https://immense-river-88635.herokuapp.com/updateOrder/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: e.value })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Status has updated successfully!')
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
          
        <table className="table">
                <thead id='thead' className="bg-light">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Service</th>
                        <th scope="col">Payment id</th>
                        <th scope="col">Action</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        orderList.map(OrderItem =>
                            <tr key={OrderItem._id}>
                                <td>{OrderItem?.booking?.name}</td>
                                <td>{OrderItem?.booking?.email}</td>
                                <td>{OrderItem?.booking?.service}</td>
                                <td>{OrderItem?.PaymentId}</td>
                                <td >
                                <Dropdown placeholderClassName='Select Status' options={options} onChange={(e) => { handleStatusChange(e, `${OrderItem._id}`) }} value={{ value: OrderItem?.status, label: OrderItem?.status }} placeholder="Select an option" />
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

export default OrderList;