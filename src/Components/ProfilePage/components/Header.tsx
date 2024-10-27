import { Typography } from "@mui/material"

type HeaderProps = {
  name: string,
}

export default function Header({ name } : HeaderProps) {
  return (
    <Typography 
      sx={{fontWeight: "bold"}} 
      variant="h6" 
      component="h2" 
      gutterBottom={true}>
      {name}
    </Typography>
  )
}
