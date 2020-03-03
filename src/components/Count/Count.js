import React from "react";
import "./Count.scss"

function Count({interfaceText}) {
  return (
    <div className="main__middle-block count">
      <div className="count__wrapper">
        <h3>Как считаем</h3>
        <p id={interfaceText?.id}>Доля story имеющих хотя бы с одним pull request или release notes. Story должны иметь связь хотя бы с 1 pr на этапах:</p>
        <ol>
          <li>"Ready for {interfaceText?.status1}</li>
          <li>"Ready for {interfaceText?.status2}</li>
          <li>"Resolved", {interfaceText?.status3}</li>
        </ol>
      </div>
    </div>
  )
}

export default Count
