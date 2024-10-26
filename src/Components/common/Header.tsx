import React from "react";
import { Box, Typography, Button } from "@mui/material";
import iconHeader from "../../assets/iconHeader.svg";

const Header = () => {
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
      </Box>
    </Box>
  );
};

export default Header;
