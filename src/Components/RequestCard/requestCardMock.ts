export const requestCardMock = [
  {
  id: "request-id-1",
  title: "Сбор средств для пенсионерки",
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
  requestGoal: 10000,
  requestGoalCurrentValue: 2500
},
  {
    id: "request-id-2",
    title: "Сбор средств для дома престарелых",
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
    requestGoal: 10000,
    requestGoalCurrentValue: 2500
  },
  {
    id: "request-id-3",
    title: "Помощь для инвалида",
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
    // helpType: "material"
    requesterType: "person",
    helpType: "material",
    helperRequirements: {
      helperType: "group",
      isOnline: true,
      qualification: "professional"
    },
    contributorsCount: 10,
    requestGoal: 10000,
    requestGoalCurrentValue: 2500
  },
]