import React, { useEffect ,useState} from 'react';


function Contact() {


    
    const [userdata,setUserdata]= useState();

    const userContact = async()=>{
        try{
                const res=await fetch('/getdata',{
                    method:"GET",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    
                });
                const data=await res.json();
                setUserdata(data);
                console.log(res);
                if(!res.status === 200){
                    const error = new Error(res.error)
                    throw error
                }
        }catch(err){
                console.log(err);
               
        }
    }

    useEffect(() => {
        userContact();
    }, [])
    return (
        <>
            <div className="contact_form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="contact_form_container py-4">
                                <div className="contact_form_title"> Contact me!</div>
                                    <form id="contact_form">
                                            <div className="contact_form_name d-flex justify-content-between align-item-between">
                                                    <input type="text" id="contact_form_name" className=" contact_form_name input_field" placeholder="Your name" required="true" />
                                                    <input type="email" id="contact_form_email" className=" contact_form_email input_field" placeholder="Your email" required="true" />
                                                    <input type="number" id="contact_form_phone" className=" contact_form_phone input_field" placeholder="Your phone" required="true" />
                                            </div>

                                            <div className="contact_form_text my-4">
                                                <textarea className="text_field contact_form_message" placeholder="Message" cols="30" rows="10"></textarea>

                                            </div>
                                            <div className="contact_form_button">
                                                <button type="submit" className="button contact_submit_button"> Send message</button>
                                            </div>
                                    </form>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Contact
