import { Box, Stack, Typography } from "@mui/material"

type OrganisationProps = {
  name: string,
  level: string,
  specialization?: string,
  year: number,
}

export default function EduOrganisation({ name, level, specialization, year } : OrganisationProps) {
  return (
    <Box>
      <Stack gap="5px" direction="row">
        <Typography 
          variant="subtitle2" 
          gutterBottom = {true}
          sx={{fontWeight: "bold"}}>
            Учреждение: 
        </Typography>
        <Typography variant="subtitle2">
          {name}
        </Typography>
      </Stack>
      <Stack gap="5px" direction="row">
        <Typography 
          variant="subtitle2" 
          gutterBottom = {true}
          sx={{fontWeight: "bold"}}>
            Уровень образования: 
        </Typography>
        <Typography variant="subtitle2">
          {level}
        </Typography>
      </Stack>
      {specialization && <Stack gap="5px" direction="row">
        <Typography 
          variant="subtitle2" 
          gutterBottom = {true}
          sx={{fontWeight: "bold"}}>
            Направление: 
        </Typography>
        <Typography variant="subtitle2">
          {specialization}
        </Typography>
      </Stack>}
      <Stack gap="5px" direction="row">
        <Typography 
          variant="subtitle2" 
          sx={{fontWeight: "bold"}}>
            Год окончания: 
        </Typography>
        <Typography variant="subtitle2">
          {year}
        </Typography>
      </Stack>
    </Box>
  )
}
