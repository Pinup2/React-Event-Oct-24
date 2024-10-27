import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { grey } from "@mui/material/colors";
import { useSelector } from "react-redux";
import userDetails from "./userDetails";
import { RootState } from "../../store/createStore";
import axios from 'axios';
import UserCard from "./UserCard"
import InfoCard from "./InfoCard"
import "./ProfilePage.css"

export default function Profile() {
  const [ data, setData ] = useState<userDetails>({
    id: "",
    name: "",
    lastName: "",
    birthdate: "",
    status: "",
    baseLocations: [{
      latitude: 0,
      longitude: 0,
      district: "",
      city: "",
    }],
    educations: [{
      organizationName: "",
      level: "",
      specialization: "",
      graduationYear: 0
    }],
    additionalInfo: "",
    contacts: {
      email: "",
          phone: "",
          social: {
              telegram: "",
              whatsapp: "",
              vk: "",
          }
    },
    favouriteRequests: []
  });
  
  const token = useSelector((state:RootState) => state.auth.token);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://natticharity.eveloth.ru/api/user", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        // eslint-disable-next-line no-undef
        console.error("Ошибка при загрузке данных с сервера:", error);
      }
    };
    fetchData();
  }, [token]);

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
          width: '78.125%',
          border: "1px solid #0000001F"
        }}>
        <Typography variant="h4" component="h1">Мой профиль</Typography>
        <Stack direction="row" spacing="20px" sx={{marginTop: "46px"}}>
          <UserCard data={data}/>
          <InfoCard data={data}/>
        </Stack>
      </Box>
    </Box>
  )
}
