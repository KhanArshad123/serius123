import React from "react";
import "./All.css";
function Desination(props) {
  return (
    <>
      <div className="destHeader">
        <h2>Featured Destinations</h2>
      </div>
      <div className="flex-container">
        {props.data.map((items) => (
          <div  >
           <div><img  style={{width:"100%",height:"160px"}}src={items.imageUrl}/></div>
           <div>{items.city}</div>
            </div>
          
        ))}
      </div>
    </>
  );
}
export default Desination;
