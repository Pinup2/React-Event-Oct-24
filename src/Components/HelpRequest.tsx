import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { HelpRequestDetails } from './HelpRequestDetails';
import { ContributionSidebar } from './ContributionSidebar';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addToFavourites, removeFromFavourites } from './favouritesSlice';

interface HelpRequestProps {
  requestId: string;
  isFavourite: boolean;
}

const HelpRequest: React.FC<HelpRequestProps> = ({
  requestId,
  isFavourite,
}) => {
  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    dispatch(addToFavourites(requestId))
      .then(() => toast.success('Успех! Добавлено в избранное'))
      .catch(() => toast.error('Ошибка при добавлении'));
  };

  const handleRemoveFromFavorites = () => {
    dispatch(removeFromFavourites(requestId))
      .then(() => toast.success('Успех! Удалено из избранного'))
      .catch(() => toast.error('Ошибка при удалении'));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap', // Allows wrapping on smaller screens
        gap: 2, // Adds space between items
      }}
    >
      {/* Left block */}
      <Box sx={{ flex: '1 1 65%', padding: 2 }}>
        {/* HelpRequestDetails content */}
        <HelpRequestDetails />

        {/* Favorite Icon */}
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
          <IconButton
            onClick={
              isFavourite ? handleRemoveFromFavorites : handleAddToFavorites
            }
            aria-label={
              isFavourite ? 'Remove from favourites' : 'Add to favourites'
            }
          >
            {isFavourite ? (
              <FavoriteIcon sx={{ color: 'red' }} />
            ) : (
              <FavoriteBorderIcon sx={{ color: 'gray' }} />
            )}
          </IconButton>
          <Typography>
            {isFavourite ? 'Удалить из избранного' : 'Добавить в избранное'}
          </Typography>
        </Box>
      </Box>

      {/* Right block */}
      <Box sx={{ flex: '1 1 30%', padding: 2 }}>
        <ContributionSidebar />
      </Box>
    </Box>
  );
};

export default HelpRequest;
