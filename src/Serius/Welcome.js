import React from 'react';
import './All.css'
import welcomeimage from './welcome-image.svg';
function Welcome()
{
    return(
        <>
        <div className="container">
            <div className="welcome"><img src={welcomeimage} style={{with:"100%",height:"400px"}}/></div>
            <div  className="welcome" style={{textAlign:"center"}}><h2 style={{textAlign:"center"}}><b>Life is short and the world is wide!</b> </h2>
            <h3 >Stay at the comfort of your homes and book a trip to travel after the post pandemic era</h3>
            <button style={{textAlign:"center"}}>PLAN A TRIP</button>
            </div>
        </div>
        
        </>
    )
}
export default Welcome;