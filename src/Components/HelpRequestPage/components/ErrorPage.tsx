import {Box} from "@mui/material";
import ErrorImg from './../assets/error.svg'

export const ErrorPage = () => {
  return (
      <Box p={2} boxShadow={1} borderRadius={2} bgcolor="white" style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center'}}>
        <img src={ErrorImg} alt="card image" style={{height: '220px', margin: '100px'}} />
      </Box>
  )
}