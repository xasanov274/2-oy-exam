import React from 'react'
import "./Sec5.css"
import imgbot from "../../../../../public/botqiz.png"
import o1 from "../../../../../public/o1.png"
import o2 from "../../../../../public/o2.png"
import star from "../../../../../public/stars.png"
function Sec5() {
  return (
    <>
      <div className="bot">
        <div className="botleft"><img src={imgbot} alt="" /></div>
        <div className="botright">
          <h3>Amazing Cosmetic</h3>
          <img src={star} alt="" />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
          <h3>Rusmin Islam</h3>
          <p>Designer</p>
          <div className="swipper">
            <img className='s1' src={o1} alt="" />
            <img className='s2' src={o2} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Sec5
