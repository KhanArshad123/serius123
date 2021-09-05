import React from "react";
import "./All.css";
import icon from './icon-party-sunny.svg';
function Weather(props) {

    const color=["#0D7E88 "," #D09378 "," #405B5D ","#74A748 "];
  return (
    <>
      <div className="weather">THE WEATHER CHANNEL</div>
      <div className="row">
        {props.data.map((item,index) => (
          
            <div className="weather1" style={{ backgroundColor: color[index],textAlign:"center",padding:"6px" }}>
              
              {item.city}
              <br/>
              <br/>
              <img src={icon}/>
              <h2>{item.temp_Celsius}<sup>o</sup></h2>
            </div>
          
        ))}
      </div>
    </>
  );
}
export default Weather;
