import { Box } from "@mui/material";
import Header from "./Header";
import Social from "./Social";

type contactProps = {
  social: {
    telegram: string,
    whatsapp: string,
    vk: string,
  }
}

export default function ContactsSocials({ social } : contactProps) {
  return (
    <Box>
      <Header name="Социальные сети"/>
        {Object.keys(social).map((key) => <Social type={key} value={social[key]}/>)}
    </Box>
  )
}
