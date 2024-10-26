import { Paper, Typography } from "@mui/material"
import InfoNavigation from "./InfoNavigation"
import InfoContacts from "./InfoContacts"
import InfoPersonal from "./InfoPersonal"

export default function InfoCard() {
  return (
    <Paper component="main" elevation={0} 
      sx={{
        width: "78.6%", 
        bgcolor: "white", 
        height: "450px",
        padding: "20px",
        border: "1px solid #0000001F"
      }}>
      InfoCard
    </Paper>
  )
}
