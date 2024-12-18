import React from "react";
import { Box, Typography, Button, Link } from "@mui/material";
import iconHeader from "../../assets/iconHeader.svg";
import { useSelector } from "react-redux";
import { selectIsAuthorized } from '../../slice/authSlice';
import avatar from "../../assets/avatar.svg";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/createStore';
import { clearAuthState } from '../../slice/authSlice';
import ProfilePopover from './ProfilePopover';

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
        <img src={iconHeader} style={{ width: "224px", cursor: "pointer"}} alt="Icon Header" />
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography sx={{cursor: "pointer"}}>Запросы о помощи</Typography>
      </Box>
      {isAuthorized ?
         <Box display="flex" justifyContent="flex-end">
         <Button onClick={handleClickAvatar}>
           <img src={avatar} style={{ width: "40px", height: "40px" }} alt="avatar" />
         </Button>
         <ProfilePopover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClosePopover}
          onClickProfile={handleClickProfile}
          onClickExit={handleClickExit}
          />
       </Box>
      :
      <Box display="flex" justifyContent="flex-end">
        <Button onClick={handleClickExit}
          variant="outlined"
          sx={{
            color: 'black',
            borderColor: 'black',
          }}
        >
          Выйти
        </Button>
      </Box>}
    </Box>
  );
};

export default Header;
