import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <>
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '152px'
    }}>
      <Typography>Об ивенте</Typography>
      <Link href="https://github.com/Pinup2/React-Event-Oct-24" 
      style={{
        textDecoration: 'none',
        color: 'black',
        fontFamily: 'Roboto, sans-serif'
      }}>
        Github проекта
      </Link>
      <Typography>Чат для джунов</Typography>
    </Box>
    </>
  )
}

export default Footer;