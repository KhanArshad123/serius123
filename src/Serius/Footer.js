import React from 'react';
import './All.css';
function Footer (){

    return (
       
        <div className="footer-container" style={{textAlign:"center"}}>
        <div className="box1" style={{textAlign:"left"}}><h2>Tripzone</h2>
            
        <a className="link"href="#">About</a>
        <br/>
        <a className="link"href="#">Awards</a>
        <br/>
        <a className="link"href="#">Contact Us</a>
        <br/>
        <a className="link"href="#">Feedback</a>
            </div>
        <div className="box1" style={{textAlign:"left"}}>
        <h2>Main Offices</h2>
            
            <a className="link"href="#">The United States </a>
            <br/>
            <a className="link"href="#">India</a>
            <br/>
            <a className="link"href="#">Brazil</a>
            <br/>
            <a className="link"href="#">Canada</a>
        </div>
        <div className="box1" style={{textAlign:"left"}}>

        <h2>Sub Offices</h2>
            
            <a className="link"href="#">Australia </a>
            <br/>
            <a className="link"href="#">England</a>
            <br/>
            <a className="link"href="#">France </a>
            <br/>
            <a className="link"href="#">Germany
</a>
        </div>
        <div className="box1" style={{textAlign:"left"}}><h3>Disclaimer</h3>
This layout is created as a pa of Sirius UI Recruitments.<b/> All the above content has no direct relation with Sirius <b/>business.</div>
        </div>
       
    )
}
export default Footer;