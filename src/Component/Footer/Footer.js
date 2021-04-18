import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div class="last">
                  <div className="container">
                    <div class="row">
                      <div class="col-3">
                        <p className="proxilus">The Proxilux Seed Initiave empowers historically disenfranchised entrepreneurs with access wealth-building opportunities,so anyone</p>
                      </div>
                      <div class="col-2">
                          <h5 className="use pb-2">Useful Links</h5>
                          <p>About</p>
                          <p>Team</p>
                          <p>Party Types</p>
                          <p>Policies</p>
                      
                      </div>
                      <div class="col-2 ">
                        <h5 className="use  pb-2">Top Party</h5>
                        <p>Paris</p>
                        <p>London</p>
                        <p>Dubai</p>
                        <p>Los angeless</p>
                  
                      </div>
                      <div class="col-3 ">
                        <h5 className="use  pb-2">Learn More</h5>
                        <p>How to Work</p>
                        <p>Become a Partner</p>
                        <p>Trust & Safety</p>
                        <p>Faqs</p>
              
                      </div>
                      <div class="col-2 ">
                        <h5 className="use  pb-2">Party Type</h5>
                        <p>Birthday</p>
                        <p>Wedding</p>
                        <p>Clown party</p>
                        <p>Decoration</p>
                       
                      </div>
                    </div>
                    <div class="line"></div>
                    <div class="row">
                        <div class="col-8">
                            <p>Copyright © 2021 debakor,All Right Reserved</p>
                        </div>
                        <div class="col-4">
                            <p class="term">Terms & Services <span class="privacy">Privacy Policy</span> Sitemap</p>
                        </div>
                    </div>
                    </div>
                  </div>
              </footer>
        </>
    );
};

export default Footer;