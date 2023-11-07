import React from "react";
import './header.css'
const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />

        <div className="h-menu flexCenter">
          <a href="">Home</a>
          <a href="">About us</a>
          <a href="">Get started</a>
          <a href="">Electrical</a>
          <a href="">Security</a>
          <button className="button">
            <a href="">Contact Us</a>
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default Header