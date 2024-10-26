import { Toolbar, ToggleButtonGroup } from "@mui/material"
import { useState } from "react"
import NavButton from "./NavButton"

export default function InfoNavigation() {
  const [ section, setSection ] = useState<string | null>(null);

  const handlePress = (_event: React.MouseEvent<HTMLElement>, newSection: string | null) => {
    setSection(newSection);
  }

  return (
    <Toolbar>
      <ToggleButtonGroup sx={{textDecoration: "capitalize"}} value={section} onChange={handlePress} exclusive>
        <NavButton name="Личные данные" value="pers" />
        <NavButton name="Контакты" value="cont"/>
        <NavButton name="Избранное" value="fav"/>
      </ToggleButtonGroup>
    </Toolbar>
  )
}
