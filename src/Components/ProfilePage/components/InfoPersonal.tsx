import { Stack } from "@mui/material"
import PersonalProfile from "./PersonalProfile"
import PersonalBirthday from "./PersonalBirtday"
import PersonalLocations from "./PersonalLocations"
import PersonalEducation from "./PersonalEducation"
import PersonalAbout from "./PersonalAbout"
import userDetails from "../userDetails"

type dataProps = {
  data: userDetails,
}

export default function InfoPersonal({ data } : dataProps) {
  const { name, lastName, birthdate, baseLocations, educations, additionalInfo } = data;

  return (
    <Stack sx={{width: "51%"}} gap="30px" direction="column">
      <PersonalProfile name={name} lastName={lastName}/>
      <PersonalBirthday birthdate={birthdate}/>
      <PersonalLocations baseLocations={baseLocations}/>
      <PersonalEducation educations={educations}/>
      <PersonalAbout additionalInfo={additionalInfo}/>
    </Stack>
  )
}
