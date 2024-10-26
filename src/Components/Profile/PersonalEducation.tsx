import { Box, Stack } from "@mui/material"
import EduOrganisation from "./EduOrganisation"
import Header from "./Header"

export default function PersonalProfile() {
  return (
    <Box>
      <Header name="Образование"/>
      <Stack gap="16px">
        <EduOrganisation university={false}/>
        <EduOrganisation university={true}/>
      </Stack>
    </Box>
  )
}