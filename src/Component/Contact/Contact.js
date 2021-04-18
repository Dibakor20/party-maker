import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <>
          <div class="contact">
    <div class="container">
      <div class="contact-us">
        <h5>CONTACT US</h5>
        <div class="contact-line"></div>
        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div>
        <div class="row">
        <div class="col-md-6 conatct-form">
          <input type="text" class="form-control" placeholder="Name"/>
          <input type="email" class="form-control" placeholder="Email"/>
          <input type="password" class="form-control" placeholder="Password"/>
        </div>
        <div class="col-md-6 message-area">
          <textarea rows="" cols="10" class="form-control">Message</textarea>
        </div>
      </div>
        <div class="button"><button class="contact-btn">Send Message</button></div>
      </div>
    </div>
  </div>   
        </>
    );
};

export default Contact;