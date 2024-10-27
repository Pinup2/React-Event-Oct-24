import { Stack } from "@mui/material";
import Contacts from "./Contacts";
import ContactsSocials from "./ContactsSocials";

type contactProps = {
  contacts: {
    email: string,
        phone: string,
        social: {
            telegram: string,
            whatsapp: string,
            vk: string,
        }
  }
}

export default function InfoContacts({ contacts } : contactProps) {
  const { email, phone, social } = contacts;

  return (
    <Stack sx={{width: "51%"}} gap="30px" direction="column">
      {email && <Contacts name="E-mail" value={email}/>}
      {phone && <Contacts name="Телефон" value={phone}/>}
      {social && <ContactsSocials social={social}/>}
    </Stack>
  )
}
