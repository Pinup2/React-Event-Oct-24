import { Box, Stack } from "@mui/material"
import Location from "./Location";
import Header from "./Header";

type locationProps = {
  baseLocations: {
    latitude: number,
    longitude: number,
    district: string,
    city: string,
  }[],
}

export default function PersonalProfile({ baseLocations } : locationProps) {
  return (
    <Box>
      <Header name="Локации для помощи"/>
      <Stack gap="16px">
        {baseLocations && baseLocations.map((loc) => <Location district={loc.district} city={loc.city}/>)}
      </Stack>
    </Box>
  )
}