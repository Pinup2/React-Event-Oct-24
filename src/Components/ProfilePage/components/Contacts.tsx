import { Box, Typography } from "@mui/material"
import Header from "./Header"

type ContactsProps = {
  name: string,
  value: string,
}

export default function Contacts({ name, value } : ContactsProps) {
  return (
    <Box>
      <Header name={name}/>
      <Typography variant="subtitle2">
        {value}
      </Typography>
    </Box>
  )
}
