import { Box } from "@mui/material"
import Header from "./Header"
import Social from "./Social"

export default function ContactsSocials() {
  return (
    <Box>
      <Header name="Социальные сети"/>
        <Social type="vk" value="Vkontakte"/>
        <Social type="telegram" value="Telegram"/>
        <Social type="whatsapp" value="Whatsapp"/>
    </Box>
  )
}
