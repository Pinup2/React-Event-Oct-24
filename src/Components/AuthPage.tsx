import React from "react";
import Login from "./authorization/Login";
import Profiles from "./authorization/Profiles";
import { Box } from "@mui/material";

const AuthPage = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
        }}
      >
        <Box sx={{ flex: 1, ml: '40px', }}>
          <Login />
        </Box>
        <Box sx={{ flex: 1,ml: '40px', }}>
          <Profiles />
        </Box>
      </Box>
    </>
  );
}

export default AuthPage;