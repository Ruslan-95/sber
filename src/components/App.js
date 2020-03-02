import React from "react";
import './style.scss';
import Influence from "./Influence/Influence";
import Deviation from "./Deviation/Deviation";
import Count from "./Count/Count";
import Shutdowns from "./Shutdowns/Shutdowns";
import Measure from "./Measure/Measure";
import Escalation from "./Escalation/Escalation";
import Parameters from "./Parameters/Parameters";
import Store from "../store";

class App extends React.Component {
  componentDidMount() {
    Store.getData().then(data => {
      this.setState({
        data
      });
    });
  }

  render() {
    return (
      <section className="main">
        <div className="main__title">
          <h1 className="main__title-text">Оргонизация работы команды</h1>
        </div>
        <div className="main__wrapper">
          <div className="main__top">
            <h2 className="main__top-title">
              Наличие незакрытых задач на конец спринта
            </h2>
            <Influence />
          </div>
          <div className="main__middle">
            <Deviation />
            <Count />
            <Shutdowns id={this.state?.data?.id} />
          </div>
          <div className="main__bottom">
            <Measure />
            <Escalation />
            <Parameters />
          </div>
        </div>
      </section>
    );
  }
}

export default App;
