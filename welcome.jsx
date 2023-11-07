import React from "react";
import "./welcome.css";
import {HiLocationMarker} from "react-icons/hi"
import CountUp from "react-countup";

const Welcome = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
      
        {/*left side */}
        <div className="hero-left flexColStart">
          <div className="hero-title">
            <div className="orange-circle"/>
          
            <h1>
              SENDEELMO <br/>
              Electrical & <br/>
              Security Services
            </h1>
          </div>
          <div className="hero-des flexColStart">
            <span className="secondaryText">
              We offer new Electrical & Solar installations, all fault diagnosis, maintenance & electrical repairs. 
            </span> 
            <span className="secondaryText">
             We also setup Electrical fences & CCTV cameras and offer maintenance for the same.
            </span>
          </div>
          <div className="search-bar flexCenter">
            <HiLocationMarker color="var(--blue" size={25}/>
            <input type="text"/>
            <button className="button">search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat" >
              <span>
                <CountUp start={8800} end={9000} duration={4}/>+
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4}/>+
              </span>
              <span className="secondaryText">Happy Clients</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28}/>+
              </span>
              <span className="secondaryText">Award Winnings</span>
            </div>
          </div>
        </div>

        {/*right side */}
        <div className="hero-right flexCenter">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Welcome