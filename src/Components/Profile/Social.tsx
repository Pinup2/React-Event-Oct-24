import { Stack, Box, Typography } from "@mui/material"
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; 
import vk from "../../assets/vk-logo.svg"

type SocialProps = {
  type: string,
  value: string,
}

export default function Social({ type, value } : SocialProps) {

  return (
    <Stack 
      spacing="32px" 
      direction="row" 
      alignItems="center" 
      sx={{height: "36px"}}>
      <Box 
        sx={{
          width: "24px",
          aspectRatio: "1/1",
          bgcolor: "black",
          borderRadius: "5px",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}>
        {type === "telegram" && <TelegramIcon sx={{width: "16px", color: "white"}}/>}
        {type === "whatsapp" && <WhatsAppIcon sx={{width: "16px", color: "white"}}/>}
        {type === "vk" && <img src={vk} style={{width: "16px"}}/>}
      </Box>
      <Typography variant="subtitle2">{value}</Typography>
    </Stack>
  )
}
