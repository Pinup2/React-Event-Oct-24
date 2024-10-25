import { Paper, Box } from "@mui/material"
import { useState } from "react"
import InfoNavigation from "./InfoNavigation"
import InfoPersonal from "./InfoPersonal"
import InfoContacts from "./InfoContacts"
import InfoFavorites from "./InfoFavorites"

export default function InfoCard() {
  const sections = ["pers", "cont", "fav"];
  const [ section, setSection ] = useState<string>(sections[2]);

  const changeSection = (newSection: string | null) => {
    if (newSection === section || newSection === null) return;
    setSection(newSection);
  }

  return (
    <Paper component="main" elevation={0} 
      sx={{
        width: "78.6%", 
        bgcolor: "white", 
        padding: "20px",
        border: "1px solid #0000001F"
      }}>
      <InfoNavigation firstSection={sections[2]} changeSection={changeSection}/>
      <Box sx={{padding: "24px"}}>
        {section === "pers" && <InfoPersonal />}
        {section === "cont" && <InfoContacts />}
        {section === "fav" && <InfoFavorites />}
      </Box>
    </Paper>
  )
}
