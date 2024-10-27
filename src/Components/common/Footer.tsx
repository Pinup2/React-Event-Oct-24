import React from "react";
import { Box, Typography, Link } from "@mui/material";

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
      <Typography>Об ивенте</Typography>
      <Link
        href="https://github.com/Pinup2/React-Event-Oct-24"
        sx={{
          textDecoration: 'none',
          color: 'black',
          fontFamily: 'Roboto, sans-serif',
          textAlign: 'center',
        }}
      >
        Github проекта
      </Link>
      <Box display="flex" justifyContent="flex-end">
        <Typography>Чат для джунов</Typography>
      </Box>
    </Box>
  );
}

export default Footer;
