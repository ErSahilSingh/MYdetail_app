import React,{useState} from 'react'
import { NavLink , useHistory} from 'react-router-dom';
import signpic from '../image/desk.png';



function Signup() {
    const history = useHistory();

    const [user , setUser]=useState({
        name:"",email:"",phone:"",work:"",password:"",cpassword:""});

        const handleinputs=(e)=>{
            
                const { name, value } = e.target;
                setUser({ ...user, [name]: value });
              };

    const PostData=async(e)=>{

            e.preventDefault();
            const {name,email,phone,work,password,cpassword} =user;

          const res = await fetch("/register",{
              method:"POST",
              headers:{
                  "Content-Type":"application/json"
              },
              body:JSON.stringify({
                name,email,phone,work,password,cpassword
              })
          });
          const data= await res.json();
          if(data.status===(422) || !data){
              window.alert("invaild registeration");
              console.log("invaild registeration");
          }else{
            window.alert("registeration successfull");
            console.log("registeration successfull");

            history.push("/login")
          }
    }

        

    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title"> Signup </h2>
                            <form method="POST" className="register-form" id="register-form">
                                <div className="form-group">
                                        <label htmlFor="name">
                                        <i class="zmdi zmdi-assignment-account matrial-icons-name"></i>
                                        </label>
                                        <input type="text" name="name" id="name" autoComplete=" off" 
                                        value={user.name}
                                        onChange={handleinputs} placeholder="Your name"></input>
                                </div>

                                <div className="form-group">
                                        <label htmlFor="email">
                                        <i class="zmdi zmdi-assignment-account matrial-icons-name"></i>
                                        </label>
                                        <input type="text" name="email" id="email" autoComplete=" off" 
                                        value={user.email}
                                        onChange={handleinputs} placeholder="Email"></input>
                                </div>


                                <div className="form-group">
                                        <label htmlFor="phone">
                                        <i class="zmdi zmdi-phone-in-talk matrial-icons-name"></i>
                                        </label>
                                        <input type="number" name="phone" id="phone" autoComplete=" off" 
                                        value={user.phone}
                                        onChange={handleinputs} placeholder="Your phone no."></input>
                                </div>

                                <div className="form-group">
                                        <label htmlFor="work">
                                        <i class="zmdi zmdi-assignment-account matrial-icons-name"></i>
                                        </label>
                                        <input type="text" name="work" id="work" autoComplete=" off" 
                                        value={user.work}
                                        onChange={handleinputs} placeholder="Your work"></input>
                                </div>

                                <div className="form-group">
                                        <label htmlFor="password">
                                        <i class="zmdi zmdi-lock matrial-icons-name"></i>
                                        </label>
                                        <input type="password" name="password" id="password" autoComplete=" off" 
                                        value={user.password}
                                        onChange={handleinputs} placeholder="Your password"></input>
                                </div>

                                <div className="form-group">
                                        <label htmlFor="cpassword">
                                        <i class="zmdi zmdi-lock matrial-icons-name"></i>
                                        </label>
                                        <input type="password" name="cpassword" id="cpassword" autoComplete=" off" 
                                        value={user.cpassword}
                                        onChange={handleinputs} placeholder="confirm Your password"></input>

                                </div>

                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="register" onClick={PostData} />

                                </div>
                            </form>
                            </div>

                            <div className="signup-image">
                                <figure>
                                    <img src={signpic} width="350vw" />
                                </figure>

                                <NavLink to="/login" className="signup-image-link">I am already register</NavLink>

                            </div>

                        
                    </div>

                </div>

            </section>
        </>
    )
}

export default Signup;
