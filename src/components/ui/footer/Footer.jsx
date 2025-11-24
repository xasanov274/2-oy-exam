import React from "react";
import "./Footer.css";
import { useState } from "react";
function Footer() {
  const[mail, setMail] = useState(null)
  function Mail(e){
    if(mail == "akmal@gmail.com"){
      alert("Hello")
    }else{
      alert("Hatolik")
    }

    setMail("")
  }
  return (
    <>
      <footer>
        <div className="footer-top">
          <h2>Subscribe to Get Our Letest News</h2>
          <form>
            <input onChange={(e)=> setMail(e.target.value)} required placeholder="Enter email" type="email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <hr />
        <div className="footer-btn">
          <div className="div1">
            <h2>
              <u>Dudeshape</u>
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
          </div>
          <div className="div2">
            <h2>Quick Link</h2>
            <ol>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ol>
          </div>
          <div className="div3">
            <h2>Contact Us</h2>
            <ol>
              <li>
                <a href="#">oyasimnaeem@email.com</a>
              </li>
              <li>
                <a href="tel">+123456789</a>
              </li>
              <div className="li">
                <i class="fa-brands fa-facebook-f">
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-instagram"></i>
                </i>
              </div>
            </ol>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
