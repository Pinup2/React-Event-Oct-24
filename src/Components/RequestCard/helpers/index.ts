import Dementia from "../assets/Dementia-bro.svg";
import Nurse from "../assets/Nursing home-bro.svg";
import Volunteer from "../assets/Volunteering-pana.svg";

export const imageSelector = (requesterType: string, helpType: string | undefined ) => {
  if(requesterType === 'person' && helpType === 'finance') {
    return Dementia
  } else if (requesterType === 'organization') {
    return Nurse
  } else if (requesterType === 'person' && helpType === 'material') {
    return Volunteer
  }
}

export const formatDateString = (dateString: string): string => {
  const [year, month, day] = dateString.split('-');
  return `${day}.${month}.${year}`;
};

export const calculateProgress = (requestGoal: number, requestGoalCurrentValue: number): number => {
  if (requestGoalCurrentValue > requestGoal) {
    return 100;
  }
  return (requestGoalCurrentValue / requestGoal) * 100;
}