import { Box, Stack, Typography } from "@mui/material"
import { grey } from "@mui/material/colors"
import UserCard from "./UserCard"
import InfoCard from "./InfoCard"
import "./Profile.css"

export default function Profile() {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <Box 
        sx={{
          width: "78.125%", 
          height: "100vh", 
          bgcolor: grey[100],
          padding: "46px"}}>
        <Typography variant="h4" component="h1">Мой профиль</Typography>
        <Stack direction="row" spacing="20px" sx={{marginTop: "46px"}}>
          <UserCard />
          <InfoCard />
        </Stack>
      </Box>
    </Box>
  )
}
