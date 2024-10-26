import { Box, Button, Stack, Typography } from "@mui/material"

export default function UserText() {
  return (
    <Box sx={{padding: "20px", borderTop: "1px solid #0000001F"}}>
      <Typography variant="h6" component="h2" gutterBottom={true}>Имя Пользователя</Typography>
      <Stack gap="3px" direction="row">
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
