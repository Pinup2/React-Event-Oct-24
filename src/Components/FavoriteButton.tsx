import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavourites, removeFromFavourites } from './FavouriteSlice';
import { toast } from 'react-toastify';
import { RootState } from '../Components/FavouriteSlice';

interface FavoriteButtonProps {
  requestId: string;
  isFavourite: boolean; 
}

const buttonStyle = css`
  &:hover {
    background-color: rgba(245, 0, 87, 0.1);
  }
  &:focus {
    background-color: rgba(245, 0, 87, 0.2);
  }
`;

const iconStyle = (isFavourite: boolean) => css`
  color: ${isFavourite ? '#f50057' : '#ccc'};
  transition:
    color 0.3s ease,
    transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ requestId, isFavourite }) => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);
  const favourites = useSelector((state: RootState) => state.favourites.favourites);

  const handleToggleFavorite = () => {
    if (!token) {
      toast.error('Ошибка: Токен не найден');
      return;
    }

    if (isFavourite) {
      dispatch(removeFromFavourites({ requestId, token }))
        .then(() => toast.success('Успех! Удалено из избранного'))
        .catch(() => toast.error('Ошибка при удалении'));
    } else {
      dispatch(addToFavourites({ requestId, token }))
        .then(() => toast.success('Успех! Добавлено в избранное'))
        .catch(() => toast.error('Ошибка при добавлении'));
    }
  };

  return (
    <>
      <div>
        {isFavourite ? 'This item is in your favorites!' : 'Not a favorite yet.'}
      </div>
      <IconButton css={buttonStyle} onClick={handleToggleFavorite}>
        <FavoriteIcon css={iconStyle(isFavourite)} />
      </IconButton>
    </>
  );
};

export default FavoriteButton;