import React, { useState } from 'react';
import Sidebar from '../dashboard/Sidebar';
import './ManageService.css'

const ManageService = () => {
    const [party,setParty] = useState([])

    const loadAll =()=>{
        fetch('https://immense-river-88635.herokuapp.com/service')
       .then(res=>res.json())
       .then(data=>setParty(data))
}
if (party.length === 0) {
   loadAll();
}

const deleteProduct =(id) =>{
    fetch(`https://immense-river-88635.herokuapp.com/deleteService/${id}`, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(result => {
            if (result) {
                loadAll();
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
                        <th scope="col">Service Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Image</th>
                        <th scope="col">Action</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        party.map(items =>
                            <tr key={items._id}>
                                <td>{items.title}</td>
                                <td>{items.price}</td>
                                <td><img src={items.imageUrl} alt="" className="partyImg"/></td>
                                
                                <td>
                                    <button onClick={()=>deleteProduct(`${items._id}`)} className="p-1 p-sm-2 btn btn-danger">
                                        <i className="far fa-trash-alt">Remove</i>
                                    </button>
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

export default ManageService;