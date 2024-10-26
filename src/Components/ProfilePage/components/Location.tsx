import { Box, Stack, Typography } from "@mui/material"

type LocationProps = {
  district: string,
  city: string,
}

export default function Location({ district, city } : LocationProps) {
  return (
    <Box>
      <Stack gap="5px" direction="row">
        <Typography 
          variant="subtitle2" 
          gutterBottom = {true}
          sx={{fontWeight: "bold"}}>
            Область: 
        </Typography>
        <Typography variant="subtitle2">
          Область
        </Typography>
      </Stack>
      <Stack gap="5px" direction="row">
        <Typography 
          variant="subtitle2" 
          sx={{fontWeight: "bold"}}>
            Населенный пункт: 
        </Typography>
        <Typography variant="subtitle2">
          Пункт
        </Typography>
      </Stack>
    </Box>
  )
}
