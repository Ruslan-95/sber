import React from "react";
import "./index.scss"

function Index(props) {
  const {prop} = props;
  console.log({props});
  return (
    <div className="main__middle-block deviation">
      <div className="deviation__wrapper">
        <h3>Что считаем отклонением</h3>
        <p>Для story в пространстве команды в <br/>статусах тестирования или<br/> представленных в пром, не имеющих <br/>связи с pull request или release notes</p>
      </div>
    </div>
  )
}

export default Index
