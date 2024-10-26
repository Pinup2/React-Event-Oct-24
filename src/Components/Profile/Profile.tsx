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
          bgcolor: grey[100],
          padding: "46px",
          border: "1px solid #0000001F"
        }}>
        <Typography variant="h4" component="h1">Мой профиль</Typography>
        <Stack direction="row" spacing="20px" sx={{marginTop: "46px"}}>
          <UserCard />
          <InfoCard />
        </Stack>
      </Box>
    </Box>
  )
}
