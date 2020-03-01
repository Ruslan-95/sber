import React from "react";
import "./index.scss"

function Index(props) {
  const {prop} = props;
  console.log({props});
  return (
    <div className="main__top-block">
      <textarea className="main__textarea" placeholder='на что влияет'/>
    </div>
  )
}

export default Index
