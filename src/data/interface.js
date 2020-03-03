export default {
  "id": "message", //# ID записи

  "algorithm": {

    "id": 123, // # ID алгоритма

    "calc_description": "123" | null //# Описание расчета алгоритма

  },

  "dev_type_id": 12333, //# Код отклонения

  "status1": "\"IFT\", \"IFT\"",

  "status2": "\"UAT\", \"UAT\"",

  "status3": "\"Done\"",

  "dev_tag": "qsd", //# Тэг отклонения

  "affects": "string" | null, //# Влияет на

  "plan_text": "string" | null, //# Отклонение если

  "period_type": "string", // # Тип периода

  "calc_period_count": 213, //# Количество периодов для замера

  "calc_frequency": 123, //# Частота замеров

  "tasks": [

    {
      "id": 3123123, //# ID задачи

      "task_level": 123, // # Уровень эскалации

      "task_deadline_period": 1233, //# Срок для отработки

      "obj_management_post": {

        "id": 76, //# ID объекта отклонения

        "name": "string" //# Имя объекта отклонения
      },

      "owner_mpost": {

        "id": 222, //# ID исполнителя задачи

        "name": "string" ///# Имя исполнителя задачи

      },

      "condition": {

        "id": 123, //# ID условия

        "chrono_start": 333,// # Хроника с

        "chrono_end": 44 //# Хроника по

      }

    }

  ]
}
