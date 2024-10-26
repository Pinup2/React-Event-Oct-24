import { Box, Button, Stack, Typography } from "@mui/material"
import Header from "./Header"

export default function UserText() {
  return (
    <Box sx={{padding: "20px", borderTop: "1px solid #0000001F"}}>
      <Header name="Имя Фамилия"/>
      <Stack gap="5px" direction="row">
        <Typography 
          variant="subtitle2" 
          sx={{fontWeight: "bold"}}>
            Статус: 
        </Typography>
        <Typography variant="subtitle2">
          Начинающий
        </Typography>
      </Stack>
      <Button variant="outlined" 
        sx={{
          marginTop: "50px", 
          textDecoration: "capitalize", 
          width: "100%", 
          color: "#000000DE",
          borderColor: "#000000DE"
        }}>
        Выйти из аккаунта
      </Button>
    </Box>
  )
}
