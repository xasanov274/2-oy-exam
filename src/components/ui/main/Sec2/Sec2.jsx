import React from "react";
import blesk from "/public/blesk.jpg";
import makeup from "/public/makeup.png";
import "./Sec2.css";
function Sec2() {
  return (
    <div className="ctn">
      <h2 id="h2">Our Porular Product</h2>
      <div className="our">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br /> Lorem Ipsum has been the industry's standard dummy
        </p>
        <a>
          Discover Our Products <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      <div className="cards">
        <div className="card">
          <img id="img1" src={blesk} alt="" />
          <h4>Cosmetic products</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and <br />{" "}
            typesetting industry. Lorem Ipsum has been the industry's <br />{" "}
            standard dummy
          </p>
          <div className="price">
            <div className="btn22">
              <button onClick={() => alert("Siz muvafaqiyatli sotib oldingiz ☺️")} className="buy">Buy Now</button>
              <button onClick={() => alert("Savatga qoshildi ✅")} className="add">Add To Cart</button>
            </div>
            <p>$120</p>
          </div>
        </div>

        <div className="card">
          <img id="img2" src={makeup} alt="" />
          <h4>Cosmetic products</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and <br />{" "}
            typesetting industry. Lorem Ipsum has been the industry's <br />{" "}
            standard dummy
          </p>
          <div className="price">
            <div className="btn22">
              <button onClick={() => alert("siz muvafaqiyatli sotib oldingiz ☺️")} className="buy">Buy Now</button>
              <button onClick={() => alert("Savatga qoshildi ✅")} className="add">Add To Cart</button>
            </div>
            <p>$120</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec2;
