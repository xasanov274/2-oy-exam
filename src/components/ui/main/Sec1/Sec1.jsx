import React from 'react'
import './Sec1.css'
import max from "../../../../assets/mix.png"
import fed from "../../../../assets/fed.png"
import goo from "../../../../assets/goo.png"
import hub from "../../../../assets/hub.png"
import vek from "../../../../assets/vek.png"
import wav from "../../../../assets/wav.png"
function Sec1() {
  return (
    <div className='box1' >
      <a href="#"><img src={vek} alt="" /></a>
      <a href="#"><img src={hub} alt="" /></a>
      <a href="#"><img src={goo} alt="" /></a>
      <a href="#"><img src={max} alt="" /></a>
      <a href="#"><img src={wav} alt="" /></a>
      <a href="#"><img src={fed} alt="" /></a>
    </div>
  )
}

export default Sec1
