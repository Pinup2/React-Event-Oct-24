import { Box, Button, Stack, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { clearAuthState } from "../../../slice/authSlice"
import Header from "./Header"

type TextProps = {
  name: string,
  lastName: string,
  status: string,
}

export default function UserText({ name, lastName, status } : TextProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toLogin = (event: React.MouseEvent<HTMLElement>) => {
    dispatch(clearAuthState());
    navigate("/login");
  }

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
        onClick={toLogin} 
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
