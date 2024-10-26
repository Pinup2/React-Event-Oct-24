import { Box, Stack } from "@mui/material"
import Location from "./Location"
import Header from "./Header"

export default function PersonalProfile() {
  return (
    <Box>
      <Header name="Локации для помощи"/>
      <Stack gap="16px">
        <Location />
        <Location />
      </Stack>
    </Box>
  )
}