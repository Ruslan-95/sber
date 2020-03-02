import React from "react";
import "./Escalation.scss"

function Escalation() {
  return (
    <div className="main__bottom-block escalation">
      <div className="escalation__wrapper">
        <h3>Схема эскалации</h3>
        <table className="escalation__table">
          <tbody>
          <tr>
            <td>Получатель</td>
            <td>Хроника</td>
            <td>Стакан задач</td>
          </tr>
          <tr>
            <td>
              Владелец<br/> продукта
            </td>
            <td>1-2</td>
            <td>
              10 задач<br/>5 додчиненных
            </td>
          </tr>
          <tr>
            <td>Лидер кластера</td>
            <td>3</td>
            <td></td>
          </tr>
          <tr>
            <td>ИТ лидер трайба</td>
            <td>4</td>
            <td></td>
          </tr>
          <tr>
            <td>Лидер трайба</td>
            <td>5</td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Escalation
