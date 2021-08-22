import React from 'react';
import { NavLink } from 'react-router-dom';

function Errorpage() {
    return (
        <>
           <div  id="not found ">
               <div className="notfound">
                   <div className="notfound-404">
                       <h1>
                            404
                       </h1>
                       <h2>SORRY  PAGE NOT FOUND!</h2>
                       <p className="mb-5">
                            the page you are looking for might have been removed or temporarly unavailable
                       </p>
                       <NavLink to="/"  > Back to Homepage</NavLink>

                   </div>
                
               </div>
            </div> 
        </>
    )
}

export default Errorpage;
