import { Box, Stack, Typography } from "@mui/material"

type OrganisationProps = {
  university: boolean,
}

export default function EduOrganisation({ university } : OrganisationProps) {
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
          Учреждение
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
          Уровень
        </Typography>
      </Stack>
      {university && <Stack gap="5px" direction="row">
        <Typography 
          variant="subtitle2" 
          gutterBottom = {true}
          sx={{fontWeight: "bold"}}>
            Направление: 
        </Typography>
        <Typography variant="subtitle2">
          Направление
        </Typography>
      </Stack>}
      <Stack gap="5px" direction="row">
        <Typography 
          variant="subtitle2" 
          sx={{fontWeight: "bold"}}>
            Год окончания: 
        </Typography>
        <Typography variant="subtitle2">
          Год
        </Typography>
      </Stack>
    </Box>
  )
}
