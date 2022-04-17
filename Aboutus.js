import React from 'react';
import abousus from '../images/aboutss.png';
export default function Aboutus() {
  return (
      <>
        <div className="container emp-profile">
            <form method="">
                <div className="row">  
                    <div className="col-md-4">
                    <div className="profile-img">
                        <img src={abousus} alt="yaswanth"></img>
                        </div>
                        </div>

                        <div className="col-md-6">
                            <div className="profile-head">
                            <h2>Yaswanth kumar</h2>
                            <h2>Full-Stack Developer</h2>
                            <p className="profile-rating mt-3 mb-5"><h2>RANKINGS:<span>9/10</span></h2></p>
                            </div>
                        </div>   
                    </div>

                    <div className="row ">
                        {/* Left side url */}   
                        <div className="col-md-1">
                        <h2><mark>FOR CONTACT</mark></h2>
                        <br></br>
                        <a href="https://www.linkedin.com/in/yaswanthpolarouth/" target="_yaswanth">Checkout</a>
                        <br/>
                        <br/>
                        {/* Right side url     */}
                        <div className="col-md-4 about-info"></div>
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>UserID:<p>1234356</p></label>
                                        </div>
                                        </div>
                                       

                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Name:<p>YASWANTH KUMAR</p></label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Mobile:<p>09874233232</p></label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Email:<p>polarouthyaswanth002@gmail.com</p></label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Exprience:<p>Pretty Good</p></label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
</>
                )
}
