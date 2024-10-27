interface actionsScheduleI {
  isDone?: boolean | undefined, stepLabel: string
}
interface contactsI {
  email: string,
  phone: string,
  website: string
}

interface helperRequirementsI {
  helperType: string,
  isOnline: boolean,
  qualification: string
}

interface locationI {
  city: string,
  district: string,
  latitude: number,
  longitude: number
}

interface organizationI {
  isVerified: boolean,
  title: string
}
export interface HelpRequestI {
  title: string,
  actionsSchedule: actionsScheduleI[],
  contacts: contactsI,
  contributorsCount: number,
  description: string,
  endingDate: string,
  goalDescription: string,
  helpType: string,
  helperRequirements: helperRequirementsI,
  id: string,
  location: locationI,
  organization: organizationI,
  requestGoal: number,
  requestGoalCurrentValue: number,
  requesterType: string,
}