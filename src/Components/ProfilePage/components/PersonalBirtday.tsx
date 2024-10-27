import { Box, Typography } from "@mui/material"
import Header from "./Header"

type birthdateProps = {
  birthdate: string,
}

export default function PersonalProfile({ birthdate } : birthdateProps) {
  const parsedDate = new Date(birthdate).toLocaleDateString('ru', { year: 'numeric', month: '2-digit', day: '2-digit' });

  return (
    <Box>
      <Header name="Дата рождения"/>
      <Typography variant="subtitle2">
        {parsedDate}
      </Typography>
    </Box>
  )
}
