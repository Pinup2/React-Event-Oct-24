import { Box, Stack, Typography } from "@mui/material"
import Header from "./Header"

type detailsProps = {
  name: string,
  lastName: string,
}

export default function PersonalProfile({ name, lastName } : detailsProps) {

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
          {lastName}
        </Typography>
      </Stack>
      <Stack gap="5px" direction="row">
        <Typography 
          variant="subtitle2" 
          sx={{fontWeight: "bold"}}>
            Имя: 
        </Typography>
        <Typography variant="subtitle2">
          {name}
        </Typography>
      </Stack>
    </Box>
  )
}
