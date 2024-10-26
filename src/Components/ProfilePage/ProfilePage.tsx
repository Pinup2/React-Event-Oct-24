import { Box, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { grey } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/createStore";
import { setUserData } from "../../slice/authSlice";
import axios from 'axios';
import UserCard from "./UserCard"
import InfoCard from "./InfoCard"
import "./ProfilePage.css"

export default function Profile() {
  const token = useSelector((state:RootState) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://natticharity.eveloth.ru/api/user", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response.data);
        if (Object.keys(response.data).length > 0) dispatch(setUserData(response.data));
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
