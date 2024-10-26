import { ToggleButton } from "@mui/material"

type NavButtonProps = {
  name: string,
  value: string,
}

export default function NavButton({ name, value } : NavButtonProps) {
  return (
    <ToggleButton 
      value={value}
      sx={{
        border: "none",
        borderBottom: "1px solid",
        borderColor: "#0000001F",
        borderRadius: "0", 
        color: "#00000099",
        fontWeight: "bold",
        "&:hover": {
          border: "none",
          borderBottom: "1px solid",
          borderColor: "#1E88E5",
          color: "#1E88E5",
        }
      }}>
      {name}
    </ToggleButton>
  )
}
