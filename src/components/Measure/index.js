import React from "react";
import "./index.scss"

function Index(props) {
  const {prop} = props;
  console.log({props});
  return (
    <div className="main__bottom-block measure">
      <div className="measure__wrapper">
        <h3>Схема измерение</h3>
        <img src="measure.jpg" alt="Схема измерение"/>
      </div>
    </div>
  )
}

export default Index
