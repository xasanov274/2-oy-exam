import React from "react";
import text1 from "../../../../public/text1.png";
import "./Header.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Header() {
  return (
    <>
      <header>
        <div className="nav-parent">
          <div className="container">
            <div className="nav-parent">
              <nav>
                <div className="nav-left">
                  <h2>Dudeshape</h2>
                </div>
                <div className="nav-center">
                  <ul className="parent-li">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Products</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div className="nav-right">
                  <i className="fa-solid fa-user"></i>
                  <i className="fa-solid fa-cart-shopping"></i>
                  <i className="fa-solid fa-bars"></i>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="parent-right">
          <div className="parent">
            <div className="left">
              <h1 className="h1">Get Your Best Cosmetic Products Here</h1>
              <p className="text1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
              <div className="input-parent">
                <input className="input" type="text" placeholder="Search..." />
                <i className="icon1 fa-solid fa-magnifying-glass"></i>
              </div>
              <button className="btn">Shop Now</button>
            </div>
            <div className="right">
            <img className="img" src={text1} alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
