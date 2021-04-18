import React from 'react';
import './ClientReview.css'

const ClientReview = ({client}) => {
    return (
        <>
             <div class="client">
            <div class="msg-box">
              <div class="box-icon"></div>
              <p class="msg">{client.description}</p>
            </div>
            <div class="user-info">
              <div class="row">
                <div class="col-md-4 pic">
                  <img src={client.image} alt="" className="client-img"/>
                </div>
                <div class="col-md-8 text">
                  <h5>{client.name}</h5>
                  <p class="msg">{client.position}</p>
                </div>
              </div>
            </div>
          </div>
        </>
    );
};

export default ClientReview;