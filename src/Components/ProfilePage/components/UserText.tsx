import { Box, Button, Stack, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { RootState } from "../../../store/createStore";
import userDetails from "../userDetails";
import Header from "./Header"

export default function UserText() {
  const data = useSelector((state:RootState) => state.auth.userData) as userDetails;
  const { name, lastName, status } : userDetails = data;

  return (
    <Box sx={{padding: "20px", borderTop: "1px solid #0000001F"}}>
      <Header name={`${name} ${lastName}`}/>
      <Stack gap="5px" direction="row">
        <Typography 
          variant="subtitle2" 
          sx={{fontWeight: "bold"}}>
            Статус: 
        </Typography>
        <Typography variant="subtitle2">
          {status}
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
