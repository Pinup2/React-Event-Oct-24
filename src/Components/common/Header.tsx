import React from "react";
import { Box, Typography, Button } from "@mui/material";
import iconHeader from "../../assets/iconHeader.svg"

const Header = () => {
  return (
    <>
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '84px'
    }}>
      <img src={iconHeader} style={{width: "224px"}}/>
      <Typography>Запросы о помощи</Typography>
      <Button
      variant="outlined"
      sx={{
        color: 'black',
        borderColor: 'black',
      }}>
        Войти
      </Button>
    </Box>
    </>
  )
}

export default Header;