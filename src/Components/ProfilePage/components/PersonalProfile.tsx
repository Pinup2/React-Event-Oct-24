import { Box, Stack, Typography } from "@mui/material"
import { useSelector } from "react-redux";
import { RootState } from "../../../store/createStore";
import userDetails from "../userDetails";
import Header from "./Header"

export default function PersonalProfile() {
  const data = useSelector((state:RootState) => state.auth.userData) as userDetails;
  const { name, lastName } : userDetails = data;

  return (
    <Box>
      <Header name="Профиль"/>
      <Stack gap="5px" direction="row">
        <Typography 
          variant="subtitle2" 
          gutterBottom = {true}
          sx={{fontWeight: "bold"}}>
            Фамилия: 
        </Typography>
        <Typography variant="subtitle2">
          {lastName}
        </Typography>
      </Stack>
      <Stack gap="5px" direction="row">
        <Typography 
          variant="subtitle2" 
          sx={{fontWeight: "bold"}}>
            Имя: 
        </Typography>
        <Typography variant="subtitle2">
          {name}
        </Typography>
      </Stack>
    </Box>
  )
}
