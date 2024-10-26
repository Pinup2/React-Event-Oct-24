import { Card, Box, Typography } from "@mui/material"

export default function FavCard() {
  return (
    <Card elevation={1} sx={{width: "calc(33% - 24px)"}}>
      <Box sx={{width: "100%", height: "220px", bgcolor: "grey"}} />
      <Box sx={{width: "100%", padding: "20px"}}>
        <Typography 
          sx={{fontWeight: "bold"}} 
          variant="h6" 
          component="h2" 
          gutterBottom={true}>
          Header
        </Typography>
      </Box>
    </Card>
  )
}
