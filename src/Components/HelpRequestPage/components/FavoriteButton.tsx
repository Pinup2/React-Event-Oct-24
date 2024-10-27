import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { css } from '@emotion/react';

interface FavoriteButtonProps {
  isFavourite: boolean;
  onClick: () => void;
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

const FavoriteButton = ({
  isFavourite,
  onClick,
}: FavoriteButtonProps) => {
  return (
    <IconButton css={buttonStyle} onClick={onClick}>
      <FavoriteIcon css={iconStyle(isFavourite)} />
    </IconButton>
  );
};

export default FavoriteButton;
