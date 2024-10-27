import { Paper, Box } from "@mui/material"
import { useState } from "react"
import InfoNavigation from "./components/InfoNavigation"
import InfoPersonal from "./components/InfoPersonal"
import InfoContacts from "./components/InfoContacts"
import InfoFavorites from "./components/InfoFavorites"
import userDetails from "./userDetails"

type dataProps = {
  data: userDetails | {},
};

export default function InfoCard({ data } : dataProps) {
  const { contacts, favouriteRequests } = data;
  const sections = ["pers", "cont", "fav"];
  const [ section, setSection ] = useState<string>(sections[0]);

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
      <InfoNavigation firstSection={sections[0]} changeSection={changeSection}/>
      <Box sx={{padding: "24px"}}>
        {section === "pers" && <InfoPersonal data={data}/>}
        {section === "cont" && <InfoContacts contacts={contacts}/>}
        {section === "fav" && <InfoFavorites favouriteRequests={favouriteRequests}/>}
      </Box>
    </Paper>
  )
}
