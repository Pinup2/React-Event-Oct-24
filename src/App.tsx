import React from 'react';
import { useParams } from 'react-router-dom';
import { ContributionSidebar } from './Components/ContributionSidebar';
import HelpRequestDetails from './Components/HelpRequestDetails';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from '@mui/material';
import FavoriteButton from './Components/FavoriteButton';

function App() {
  // const { requestId } = useParams<{ requestId: string }>();
  const requestId = 'request-id-1';


  return (
    <Box
  sx={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 2,
    padding: 2,
  }}
>
  {requestId ? (
    <>
      <HelpRequestDetails id={requestId} />
      <ContributionSidebar requestId={requestId} />
      <FavoriteButton isFavourite={false} />
    </>
  ) : (
    <p>Request ID not found</p>
  )}
</Box>
  );
}

export default App;
