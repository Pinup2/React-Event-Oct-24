import { Box, Stack } from "@mui/material"
import { useSelector } from "react-redux";
import { RootState } from "../../../store/createStore";
import userDetails from "../userDetails";
import Location from "./Location"
import Header from "./Header"

export default function PersonalProfile() {
  const data = useSelector((state:RootState) => state.auth.userData) as userDetails;
  const { baseLocations } : userDetails = data;

  return (
    <Box>
      <Header name="Локации для помощи"/>
      <Stack gap="16px">
        {baseLocations.map((loc) => <Location district={loc.district} city={loc.city}/>)}
      </Stack>
    </Box>
  )
}