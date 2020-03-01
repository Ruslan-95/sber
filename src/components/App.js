import React from "react";
import './style.scss';
import Influence from "./Influence/index";
import Deviation from "./Deviation/index";
import Count from "./Count/index";
import Shutdowns from "./Shutdowns/index";
import Measure from "./Measure/index";
import Escalation from "./Escalation/index";
import Parameters from "./Parameters/index";
import testData from "../data/index";

function App() {
  return (
    <section className="main">
      <div className="main__title">
        <h1 className="main__title-text">Оргонизация работы команды</h1>
      </div>
      <div className="main__wrapper">
        <div className="main__top">
          <h2 className="main__top-title">Наличие незакрытых задач на конец спринта</h2>
          <Influence/>
        </div>
        <div className="main__middle">
          <Deviation/>
          <Count/>
          <Shutdowns testData={testData.id} foo="test"/>
        </div>
        <div className="main__bottom">
          <Measure/>
          <Escalation/>
          <Parameters/>
        </div>
      </div>
    </section>
  )
}

export default App
