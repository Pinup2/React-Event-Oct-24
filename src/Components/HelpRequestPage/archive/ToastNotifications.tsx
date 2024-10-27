import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from 'react-redux';
import { addToFavourites, removeFromFavourites } from './FavouriteSlice';
import { toast } from 'react-toastify';


const FavoriteButton = ({ requestId, isFavourite }) => {
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    if (isFavourite) {
      dispatch(removeFromFavourites(requestId))
        .then(() => toast.success('Успех! Удалено из избранного'))
        .catch(() => toast.error('Ошибка при удалении'));
    } else {
      dispatch(addToFavourites(requestId))
        .then(() => toast.success('Успех! Добавлено в избранное'))
        .catch(() => toast.error('Ошибка при добавлении'));
    }
  };

  return (
    <IconButton onClick={handleToggleFavorite}>
      <FavoriteIcon color={isFavourite ? 'error' : 'inherit'} />
    </IconButton>
  );
};
