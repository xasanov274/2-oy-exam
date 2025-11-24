import React from "react";
import "./Sec4.css";
import cream from "/public/cream.png";
function Sec4() {
  return (
    <div className="ota">

     <div className="clean">
        <h4>The Perfect Beauty Of You</h4>
        <p className="name">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p className="desc">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. Lorem Ipsum
          is simply dummy text of the printing and typesetting industry.
        </p>
        <button>Shop Now</button>
      </div>
      <div className="img">
        <img src={cream} alt="" />
      </div>
     </div>
  );
}

export default Sec4;
