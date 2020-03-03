import React from "react";
import "./Shutdowns.scss"

function Shutdowns({data}) {
  return (
    <div className="main__middle-block shutdowns">
      <div className="shutdowns__wrapper">
        <p>Порог отклонения</p>
        <b> > {data?.tasks[0]?.task_level}% </b>
        <p>Период замера</p>
        <b>{data?.tasks[0]?.task_deadline_period}</b>
        <p>Число замера</p>
        <b>{data?.tasks[0]?.task_deadline_line}</b>
        <p>Срок устранения</p>
        <b>{data?.tasks[0]?.task_deadline_all}</b>
      </div>
    </div>
  )
}

export default Shutdowns
