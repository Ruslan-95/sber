import React from "react";
import "./Count.scss"

function Count() {
  return (
    <div className="main__middle-block count">
      <div className="count__wrapper">
        <h3>Как считаем</h3>
        <p>Доля story имеющих хотя бы с одним pull request или release notes. Story должны иметь связь хотя бы с 1 pr на этапах:</p>
        <ol>
          <li>"Ready for IFT", "IFT"</li>
          <li>"Ready for UAT", "UAT"</li>
          <li>"Resolved", "Done"</li>
        </ol>
      </div>
    </div>
  )
}

export default Count
