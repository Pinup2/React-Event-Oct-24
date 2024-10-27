import React from "react";
import { Box, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        alignItems: 'center',
        height: '152px',

      }}
    >
      <Link
        display="flex"
        justifyContent="flex-start"
        href="https://t.me/natti_jun_front/239"
        sx={{
          textDecoration: 'none',
          color: 'black',
          fontFamily: 'Roboto, sans-serif',
          textAlign: 'center',
          marginBottom:'64px',
          marginTop:'10px'
        }}
      >
        Об ивенте
      </Link>
      <Link
        href="https://github.com/Pinup2/React-Event-Oct-24"
        sx={{
          textDecoration: 'none',
          color: 'black',
          fontFamily: 'Roboto, sans-serif',
          textAlign: 'center',
          marginBottom:'64px',

        }}
      >
        Github проекта
      </Link>
      <Link
        display="flex" 
        justifyContent="flex-end"
        href="https://t.me/natti_jun_front_chat"
        sx={{
          textDecoration: 'none',
          color: 'black',
          fontFamily: 'Roboto, sans-serif',
          textAlign: 'center',
          marginBottom:'64px',

        }}
      >
        Чат для джунов
      </Link>
    </Box>
  );
}

export default Footer;
