import { Box, Typography } from "@mui/material"
import Header from "./Header"

export default function PersonalProfile() {
  return (
    <Box>
      <Header name="Дата рождения"/>
      <Typography variant="subtitle2">
        дата рождения
      </Typography>
    </Box>
  )
}
