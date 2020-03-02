import React from "react";
import "./Shutdowns.scss"

function Shutdowns({id}) {
  console.log({id});
  return (
    <div className="main__middle-block shutdowns">
      <h2>{id}</h2>
      <div className="shutdowns__wrapper">
        <p>Порог отклонения</p>
        <b> > 0% </b>
        <p>Период замера</p>
        <b>Срез на дату</b>
        <p>Число замера</p>
        <b>1 неделя </b>
        <p>Срок устранения</p>
        <b>4 дня</b>
      </div>
    </div>
  )
}

export default Shutdowns
