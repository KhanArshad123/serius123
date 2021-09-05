import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Welcome from "./Welcome";
import "./All.css";
import promo from "./promo-image.png";
import Weather from "./Weather";
import Desination from "./Destination";
import Form from "./Form";
import Footer from "./Footer";
function Nav() {
  const weather = React.createRef();
  const destination = React.createRef();
  const qoutes = React.createRef();
  const gotoWeather = () =>
    weather.current.scrollIntoView({
      behavior: "smooth",
    });
  const gotoDestination = () =>
    destination.current.scrollIntoView({
      behavior: "smooth",
    });
  const gotoQoutes = () =>
    qoutes.current.scrollIntoView({
      behavior: "smooth",
    });
  const [data, setData] = useState([]);
  const [dest, setDest] = useState([]);
  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/e3ae9d2e-78f5-403d-b6cd-fa7f8c7e1576")
      .then((Response) => {
        console.log(Response.data.result);
        setData(Response.data.result);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/3e6901dd-9a60-4771-a8cb-9c62177a654c")
      .then((Response) => {
        console.log(Response.data.result);
        setDest(Response.data.result);
      });
  }, []);
  return (
    <>
      <div className="nav">
        <span>
          <button  className="submit1" onClick={gotoWeather}> <b>WEATHER</b></button>
        </span>
        <span>
          <button className="submit1" onClick={gotoDestination}><b>DESTINATIONS</b></button>
        </span>
        <span>
          <button className="submit1" onClick={gotoQoutes}><b>GET A QOUTES</b></button>
        </span>
      </div>
      <Welcome />
      <div ref={weather}>
        <Weather data={data} />
      </div>
      <div ref={destination}>
        <Desination data={dest} />
      </div>
      <div className="promo">
        <img src={promo} style={{ width: "100%", height: "500px" }} />
        <div className="bottom-left">
          <h1 style={{ fontSize: "50px" }}>PLAN A TRIP</h1>
          <p style={{ fontSize: "25px" }}>
            Make your vacation the most <br />
            memorable one{" "}
          </p>
        </div>
      </div>
      <div ref={qoutes}><Form/></div>
      <br/>
      <div><Footer/></div>
    </>
  );
}
export default Nav;
