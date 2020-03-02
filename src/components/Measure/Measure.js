import React from "react";
import "./Measure.scss"
import img from "./measure.jpg"

function Measure() {
  return (
    <div className="main__bottom-block measure">
      <div className="measure__wrapper">
        <h3>Схема измерение</h3>
        <img src={img} alt="Схема измерение"/>
      </div>
    </div>
  )
}

export default Measure
