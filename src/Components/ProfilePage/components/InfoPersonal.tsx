import { Stack } from "@mui/material"
import PersonalProfile from "./PersonalProfile"
import PersonalBirthday from "./PersonalBirtday"
import PersonalLocations from "./PersonalLocations"
import PersonalEducation from "./PersonalEducation"
import PersonalAbout from "./PersonalAbout"

export default function InfoPersonal() {
  return (
    <Stack sx={{width: "51%"}} gap="30px" direction="column">
      <PersonalProfile />
      <PersonalBirthday />
      <PersonalLocations />
      <PersonalEducation />
      <PersonalAbout />
    </Stack>
  )
}
