import { Box, Typography } from "@mui/material"
import { useSelector } from "react-redux";
import { RootState } from "../../../store/createStore";
import userDetails from "../userDetails";
import Header from "./Header"

export default function PersonalProfile() {
  const data = useSelector((state:RootState) => state.auth.userData) as userDetails;
  const { birthdate } : userDetails = data;
  const parsedDate = new Date(birthdate).toLocaleDateString('ru', { year: 'numeric', month: '2-digit', day: '2-digit' });

  return (
    <Box>
      <Header name="Дата рождения"/>
      <Typography variant="subtitle2">
        {parsedDate}
      </Typography>
    </Box>
  )
}
