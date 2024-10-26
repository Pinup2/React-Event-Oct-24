import { ToggleButton } from "@mui/material"

type NavButtonProps = {
  name: string,
  value: string,
}

export default function NavButton({ name, value } : NavButtonProps) {
  return (
    <ToggleButton
      disableRipple
      disableTouchRipple
      disableFocusRipple 
      value={value}
      sx={{
        border: "none",
        borderBottom: "1px solid",
        borderColor: "#0000001F",
        borderRadius: "0", 
        color: "#00000099",
        fontWeight: "bold",
        bgcolor: "#00000000",
        "&:hover": {
          bgcolor: "#00000000",
          border: "none",
          borderBottom: "1px solid",
          borderColor: "#1E88E5",
          color: "#1E88E5",
        },
        "&.Mui-selected": {
          border: "none",
          borderBottom: "1px solid",
          bgcolor: "#00000000",
          color: "#1E88E5",
          borderColor: "#1E88E5",
        }
      }}>
      {name}
    </ToggleButton>
  )
}
