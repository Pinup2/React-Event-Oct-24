import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { grey } from "@mui/material/colors";
import { useSelector } from "react-redux";
import userDetails from "./userDetails";
import { RootState } from "../../store/createStore";
import axios from 'axios';
import UserCard from "./UserCard"
import InfoCard from "./InfoCard"
import errorImg from "../../assets/Container.png"
import "./ProfilePage.css"

export default function Profile() {
  const [ error, setError ] = useState<boolean>(false);
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
        setData(response.data);
      } catch (error) {
        // eslint-disable-next-line no-undef
        console.error("Ошибка при загрузке данных с сервера:", error);
        setError(true);
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
          padding: "40px",
          width: "100%",
          minHeight: "calc(100vh-236px)",
          border: "1px solid #0000001F"
        }}>
        <Typography variant="h4" component="h1">Мой профиль</Typography>
        {error ? 
        <Stack sx={{justifyContent: "center", alignItems: "center"}}>
          <img src={errorImg} style={{width: "60%"}}/>
        </Stack> :
        <Stack direction="row" spacing="20px" sx={{marginTop: "20px"}}>
          <UserCard data={data}/>
          <InfoCard data={data}/>
        </Stack>}
      </Box>
    </Box>
  )
}
