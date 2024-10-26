export const requestCardMock = [
  {
  id: "request-id-1",
  title: "Сбор средств для пенсионерки Ангелины Ивановны ",
  organization: {
    title: "Фонд помощи для ветеранов и инвалидов \"Вера\"",
    isVerified: true
  },
  description: "Описание запроса на помощь.",
  goalDescription: "Оплатить лечение МКБ в клинике \"Здоровье\".",
  actionsSchedule: [
    {
      stepLabel: "Шаг 1",
      isDone: true
    }
  ],
  endingDate: "2023-12-31",
  location: {
    latitude: 40.712776,
    longitude: -74.005974,
    district: "Пресненский",
    city: "Москва"
  },
  contacts: {
    email: "contact@example.com",
    phone: "+123456789",
    website: "https://example.com"
  },
  requesterType: "person",
  helpType: "finance",
  helperRequirements: {
    helperType: "group",
    isOnline: true,
    qualification: "professional"
  },
  contributorsCount: 10,
  requestGoal: 78000,
  requestGoalCurrentValue: 35000
},
  {
    id: "request-id-2",
    title: "Сбор средств для дома престарелых “Родные стены” ",
    organization: {
      title: "Благотворительная организация",
      isVerified: true
    },
    description: "Описание запроса на помощь.",
    goalDescription: "Купить инвалидное кресло. Обеспечить продуктами на 4 месяца.",
    actionsSchedule: [
      {
        stepLabel: "Шаг 1",
        isDone: true
      }
    ],
    endingDate: "2023-12-31",
    location: {
      latitude: 40.712776,
      longitude: -74.005974,
      district: "Пресненский",
      city: "Москва"
    },
    contacts: {
      email: "contact@example.com",
      phone: "+123456789",
      website: "https://example.com"
    },
    // organization
    requesterType: "organization",
    helpType: "finance",
    helperRequirements: {
      helperType: "group",
      isOnline: true,
      qualification: "professional"
    },
    contributorsCount: 10,
    requestGoal: 100000,
    requestGoalCurrentValue: 20500
  },
  {
    id: "request-id-3",
    title: "Помощь для инвалида Ивана Красинова",
    organization: {
      title: "Благотворительная организация",
      isVerified: true
    },
    description: "Описание запроса на помощь.",
    goalDescription: "Цель данного запроса.",
    actionsSchedule: [
      {
        stepLabel: "Шаг 1",
        isDone: true
      }
    ],
    endingDate: "2028-06-08",
    location: {
      latitude: 40.712776,
      longitude: -74.005974,
      district: "Пресненский",
      city: "Москва"
    },
    contacts: {
      email: "contact@example.com",
      phone: "+123456789",
      website: "https://example.com"
    },
    requesterType: "person",
    helpType: "material",
    helperRequirements: {
      helperType: "group",
      isOnline: true,
      qualification: "professional"
    },
    contributorsCount: 10,
    requestGoal: 10000,
    requestGoalCurrentValue: 9500
  },
]