import React from "react";
import { Box, Typography, Button, Popover, Icon } from "@mui/material";
import iconHeader from "../../assets/iconHeader.svg";
import { useSelector } from "react-redux";
import { selectIsAuthorized } from '../../slice/authSlice';
import avatar from "../../assets/avatar.svg";
import { useState } from "react";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/createStore';
import { clearAuthState } from '../../slice/authSlice';

const Header = () => {
  const isAuthorized = useSelector(selectIsAuthorized);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleClickAvatar = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleClickProfile = () => {
    console.log("Перешел в Мой профиль");
    navigate('/profile');
    handleClosePopover();
  }

  const handleClickExit = () => {
    console.log("Разлогинелся");
    dispatch(clearAuthState());
    navigate('/login');
    handleClosePopover();
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        alignItems: 'center',
        height: '84px',
      }}
    >
      <Box>
        <img src={iconHeader} style={{ width: "224px" }} alt="Icon Header" />
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography>Запросы о помощи</Typography>
      </Box>
      {isAuthorized ?
         <Box display="flex" justifyContent="flex-end">
         <Button onClick={handleClickAvatar}>
           <img src={avatar} style={{ width: "40px", height: "40px" }} alt="avatar" />
         </Button>
         <Popover
           open={open}
           anchorEl={anchorEl}
           onClose={handleClosePopover}
           anchorOrigin={{
             vertical: 'bottom',
             horizontal: 'center',
           }}
           transformOrigin={{
             vertical: 'top',
             horizontal: 'right',
           }}
         >
           <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
           }}>
              <Button onClick={handleClickProfile}
              sx={{
                color: "black",
              }}>
                <Icon>
                  <PersonRoundedIcon />
                </Icon>
                <Typography>Мой профиль</Typography>
              </Button>
              <Button onClick={handleClickExit}
              sx={{
                color: "black",
              }}>
                <Icon>
                  <LogoutRoundedIcon />
                </Icon>
                <Typography>Выйти</Typography>
              </Button>
           </Box>
         </Popover>
       </Box>
      :
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="outlined"
          sx={{
            color: 'black',
            borderColor: 'black',
          }}
        >
          Войти
        </Button>
      </Box>}
    </Box>
  );
};

export default Header;
