import { ToggleButtonGroup, Stack } from "@mui/material"
import { useState } from "react"
import NavButton from "./NavButton"
import ViewIcons from "./ViewIcons"

type InfoNavigationProps = {
  firstSection: string,
  changeSection: Function,
}

export default function InfoNavigation({ firstSection, changeSection } : InfoNavigationProps) {
  const [ section, setSection ] = useState<string | null>(firstSection);

  const handlePress = (event: React.MouseEvent<HTMLElement>, newSection: string | null) => {
    changeSection(newSection);
    setSection(newSection);
  }

  return (
    <Stack direction="row" sx={{justifyContent: "space-between"}}>
      <ToggleButtonGroup sx={{textDecoration: "capitalize"}} value={section} onChange={handlePress} exclusive>
        <NavButton name="Личные данные" value="pers"/>
        <NavButton name="Контакты" value="cont"/>
        <NavButton name="Избранное" value="fav"/>
      </ToggleButtonGroup>
      {section === "fav" && <ViewIcons />}
    </Stack>
  )
}
