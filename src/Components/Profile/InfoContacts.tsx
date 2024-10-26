import { Stack } from "@mui/material"
import Contacts from "./Contacts"
import ContactsSocials from "./ContactsSocials"

export default function InfoContacts() {
  return (
    <Stack sx={{width: "51%"}} gap="30px" direction="column">
      <Contacts name="E-mail" value="1111@mail.ru"/>
      <Contacts name="Телефон" value="+7-777-77-77"/>
      <ContactsSocials />
    </Stack>
  )
}
