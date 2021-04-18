import React from 'react';
import './Feature.css'
import event1 from '../../images/Birthday.jpg'
import event2 from '../../images/popular.png'

const Feature = () => {
    return (
        <>
         <div className="container event mb-5">
         <div class="row mt-5">
        <div class="col-md-6">
          <img src={event1} alt="" class="img-fluid"/>
        </div>
        <div class="col-md-6 sub-list">
          <h3 class="pict">Our Latest Event</h3>
          <div class="sub-line"></div>
          <p class="picture" >Birthdays are the best kind of celebration. It has been another year of life for your or your loved one and that is certainly reason to party. Whether you are planning your little one’s birthday bash, your buddy’s surprise party or your own soiree, you will need to send invitations. </p>
          
            <div class="row ">
              <div class="col-md-2">
                <div class="circle">
                  <span><i class="fa fa-cloud-upload" aria-hidden="true"></i></span>  
                </div>
              </div>
              <div class="col-md-10">
                <h5>TitLe</h5>
                <p class="picture">Since finding the words is often the hardest part, we came up with a few birthday invitation wording.</p>
              </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <div class="circle">
                <span><i class="fa fa-cloud-download" aria-hidden="true"></i></span>
               
              </div>
            </div>
            <div class="col-md-10">
              <h5>Quote</h5>
              <p class="picture">In addition to requesting someone’s presence, sending invites is a great way to let your guests know</p>
            </div>
        </div>
        </div>
      </div>
        <div className="popular">
      <div class="row">
        <div class="col-md-6">
          <h5 class="pict">Most Popular Event</h5>
          <div class="sub-line"></div>
          <p class="picture">Since finding the words is often the hardest part, we came up with a few birthday invitation wording examples to show how you can include the important details and still be fun! Once the planning is done, sit back, relax and get excited about all the fun.<br/><br/>

          Birthdays are the best kind of celebration. It has been another year of life for your or your loved one and that is certainly reason to party.</p>
        </div>
        <div class="col-md-6">
          <img src={event2} alt="" class="img-fluid"/>
        </div>
      </div>
        </div>

         </div>   

         
        </>
    );
};

export default Feature;