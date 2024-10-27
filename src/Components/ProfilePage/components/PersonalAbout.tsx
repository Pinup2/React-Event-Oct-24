import { Box, Typography } from "@mui/material";
import Header from "./Header";

type additionProps = {
  additionalInfo: string,
}

export default function PersonalProfile({ additionalInfo } : additionProps) {
  return (
    <Box>
      <Header name="Обо мне"/>
      <Typography variant="subtitle2">
        {additionalInfo} 
      </Typography>
    </Box>
  )
}