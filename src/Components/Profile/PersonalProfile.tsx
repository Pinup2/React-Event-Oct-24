import { Box, Stack, Typography } from "@mui/material"
import Header from "./Header"

export default function PersonalProfile() {
  return (
    <Box>
      <Header name="Профиль"/>
      <Stack gap="5px" direction="row">
        <Typography 
          variant="subtitle2" 
          gutterBottom = {true}
          sx={{fontWeight: "bold"}}>
            Фамилия: 
        </Typography>
        <Typography variant="subtitle2">
          Фамилия
        </Typography>
      </Stack>
      <Stack gap="5px" direction="row">
        <Typography 
          variant="subtitle2" 
          sx={{fontWeight: "bold"}}>
            Имя: 
        </Typography>
        <Typography variant="subtitle2">
          Имя
        </Typography>
      </Stack>
    </Box>
  )
}
