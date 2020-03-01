export default class testData {
  constructor() {
    this.init();
    console.log('this.getData', this.getData())
  }

  init() {
    this.getData();
  }

  getData() {
    const data = {
      id: "jklhlkfdsf21312edsqdas",
      "algorithm": {
        "id": 1,
        "calc_description": "Описание расчета"
      },
      "dev_type_id": 312,

      "dev_tag": "Отклонение",

      "affects": "Влияет на",

      "plan_text": "отклонение если",

      "period_type": "w",

      "calc_period_count": 1,

      "calc_frequency": 1,

      "tasks": [
        {
          "id": 1,

          "task_level": 1,

          "task_deadline_period": 14,

          "obj_management_post": {

            "id": 1,

            "name": "Объект"

          },

          "owner_mpost": {

            "id": 2,

            "name": "Исполнитель"

          },

          "condition": {

            "id": 1,

            "chrono_start": 1,

            "chrono_end": 2

          }
        }]
    };
    return setTimeout(data, 10000);
  }
}
