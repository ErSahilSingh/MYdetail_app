import React,{useState} from 'react';
import loginpic from '../image/men.png'
import {NavLink,useHistory} from 'react-router-dom'

function Login() {
    const history=useHistory();

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');


    const loginUser= async(e)=>{
        e.preventDefault();
        const res=await fetch('/signin',
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        });
        const data=res.json();
        if(res.status===400|| !data){
            window.alert("invaild info")
        }else{
            window.alert("login successfull");
                history.push("/");
        }

    }
    return (
        <>

<section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                    <div className="signup-image">
                                <figure>
                                    <img src={loginpic} width="300vw"/>
                                </figure>

                                <NavLink to="/signup" className="signup-image-link">Create New Acount</NavLink>

                            </div>

                        <div className="signup-form">
                            <h2 className="form-title"> Signin </h2>
                            <form method="POST" className="register-form" id="register-form">
                                

                                <div className="form-group">
                                        <label htmlFor="email">
                                        <i class="zmdi zmdi-assignment-account matrial-icons-name"></i>
                                        </label>
                                        <input type="text" name="email" id="email" autoComplete="off" value={email}
                                        onChange={(e)=>setEmail(e.target.value)} placeholder="Email"></input>
                                </div>


                               
                                <div className="form-group">
                                        <label htmlFor="password">
                                        <i class="zmdi zmdi-lock matrial-icons-name"></i>
                                        </label>
                                        <input type="password" name="password" id="password" autoComplete="off" value={password}
                                        onChange={(e)=>setPassword(e.target.value)} placeholder="Your password"></input>
                                </div>

                               

                                <div className="form-group form-button">
                                    <input type="submit" name="signin" id="signin" className="form-submit" value="login" onClick={loginUser} />

                                </div>
                            </form>
                            </div>

                                                  
                    </div>

                </div>

            </section>
            
        </>
    )
}

export default Login;
