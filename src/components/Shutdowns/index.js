import React from "react";
import "./index.scss"

function Index(props) {
  console.log('props', props);
  const {testData} = props;
  console.log('p', {testData});
  return (
    <div className="main__middle-block shutdowns">
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

export default Index
