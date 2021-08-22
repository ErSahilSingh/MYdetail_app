import React, { useEffect } from 'react';
import sahilsingh from '../image/sahil.jpg';
import {useHistory} from 'react-router-dom'

function About() {
const history=useHistory();

    const callaboutpage= async()=>{
        try{
                const res=await fetch('/about',{
                    method:"GET",
                    headers:{
                        Accept: "application/json",
                        "Content-Type":"application/json"
                    },
                    credentials:"include"
                });
                const data=await res.json();
                console.log(res);
                if(!res.status === 200){
                    const error = new Error(res.error)
                    throw error
                }
        }catch(err){
                console.log(err);
                history.push('/login');
        }
    }

    useEffect(() => {
        callaboutpage();
    }, [])
    return (
        <>
        <div className="container emp-profile">
            <form method="GET">
                <div className="row">
                    <div className= "col-md-4">
                        <div className="profile-img">
                        <img src={sahilsingh} alt="sahil" /> 
                        </div>
                        
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                            <h5>SAHIL SINGH</h5>
                            <h6>Reactjs Developer,Front-end developer.</h6>
                            <p>Mern developer (Beginner)</p>
                            <p className="profile-rating mt-3 mb-5"> <span> 6/10</span></p>

                            <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item">
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                            </li>


                            <li class="nav-item">
                            <a class="nav-link " id="profile-tab" data-toggle="tab" href="#profile" role="tab">Profile timeline</a>
                            </li>
                            </ul>

                        </div>
                    </div>
                    <div className="col-md-2 d-block d-xl-block">
                        <button className="btn btn-outline-secondary btn-sm "><a className="text-decoration-none"  href="https://drive.google.com/file/d/1_uZnPVz7gEnqYO_oxjembx6qoIIBUZAP/view?usp=sharing"> RESUME</a></button>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>WORKLINK</p>
                            <a href="#" target="_s">LinkedIn</a><br/>
                            <a href="#" target="_s">Github</a><br/>
                            <a href="#" target="_s"></a><br/>
                            
                        </div>

                    </div>

                    <div className="col-md-8 pl-4 about-info">
                        <div className="tab-content profile-tab" id="mytabContent">
                            <div className=" tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                
                            <div className="row">
                                    <div className="col-md-6 py-2">
                                        <label ><i class="zmdi zmdi-account "></i> Name</label>

                                    </div>
                                    <div className="col-md-6">
                                        <p>SAHIL SINGH</p>

                                    </div>

                                </div>

                                
                                <div className="row">
                                    <div className="col-md-6 py-2">
                                        <label ><i class="zmdi zmdi-email"></i> Email</label>

                                    </div>
                                    <div className="col-md-6">
                                        <p>singhforever9917@gmail.com</p>

                                    </div>

                                </div>
                                
                                <div className="row">
                                    <div className="col-md-6 py-2">
                                        <label ><i class="zmdi zmdi-phone-in-talk"></i> Phone</label>

                                    </div>
                                    <div className="col-md-6">
                                        <p>9801409917</p>

                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-md-6 py-2">
                                        <label ><i class="zmdi zmdi-group-work"></i> Address</label>

                                    </div>
                                    <div className="col-md-6">
                                        <p>Bengaluru , Karnataka</p>

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

export default About;
