import Card from '@mui/material/Card';
import {Typography, Box, Stack} from '@mui/material';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';


import selectedButton from './assets/_IconButton_selected.svg'
import unselectedButton from './assets/_IconButton_.svg'

import styles from './styles.module.css'
import {calculateProgress, formatDateString, imageSelector} from "./helpers";
import { useNavigate} from "react-router-dom";

type RequestCardPropsType = {
  title: string;
  id: string;
  organization: {
    title: string,
    isVerified: boolean
  }
  location: {
    latitude: number,
    longitude: number,
    district: string,
    city: string,
  }
  goalDescription: string,
  requesterType: string,
  helpType?: string,
  endingDate: string,
  requestGoal: number,
  requestGoalCurrentValue: number,
  onClick: () => void,
}


export const RequestCardVariant = ({ title,
                              id,
                              organization,
                              location,
                              goalDescription,
                              requesterType,
                              helpType,
                              endingDate,
                              requestGoal,
                              onClick,
                              requestGoalCurrentValue}: RequestCardPropsType) => {
  // TODO убрать isClicked
  const isClicked = true;
  const navigate = useNavigate();
  // TODO пример мапинга — удалить после использования
  // <div style={{display: 'flex', gap: '16px'}}>
  //   {requestCardMock.map(card => {
  //     return (
  //       <RequestCard
  //         key={card.id}
  //         title={card.title}
  //         organization={card.organization}
  //         location={card.location}
  //         goalDescription={card.goalDescription}
  //         requesterType={card.requesterType}
  //         helpType={card.helpType}
  //         endingDate={card.endingDate}
  //         requestGoal={card.requestGoal}
  //         requestGoalCurrentValue={card.requestGoalCurrentValue}
  //       />
  //     )
  //   })}
  // </div>


  return (
      <Card onClick={() => navigate(`/request/${id}`)} sx={{width: "100%", padding: "20px", borderBottom: "1px solid #0000001F"}} elevation={0}>
        <Stack direction="row" justifyContent="space-between">

          <Stack gap="30px" sx={{width: "25%"}}>
            <Typography variant="h5" component="h5">
              {title}
            </Typography>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: '4px', width: "100%"}}>
              <Typography variant="subtitle2" fontWeight="fontWeightBold">
                Мы собрали
              </Typography>
              <LinearProgress variant="determinate" value={calculateProgress(requestGoal, requestGoalCurrentValue)} />
              <Box style={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography variant="body2" color='textSecondary'>
                  {requestGoalCurrentValue.toLocaleString('ru-RU')} руб
                </Typography>
                <Typography variant="body2" color='textSecondary'>
                  {requestGoal.toLocaleString('ru-RU')} руб
                </Typography>
              </Box>
            </Box>
            <Button variant="contained" fullWidth onClick={onClick}>Помочь</Button>
          </Stack>

          <Stack gap="30px" sx={{width: "25%"}}>
            <Box>
              <Typography variant="subtitle2" fontWeight="fontWeightBold" style={{marginTop: '8px'}}>
                Организатор
              </Typography>
              <Typography variant="body2">
                {organization.title}
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" fontWeight="fontWeightBold">
                Завершение
              </Typography>
              <Typography variant="body2">
                {formatDateString(endingDate)}
              </Typography>
            </Box>
          </Stack>
          
          <Stack gap="30px" sx={{width: "25%"}}>
            <Box>
              <Typography variant="subtitle2" fontWeight="fontWeightBold">
                Локация
              </Typography>
              <Typography variant="body2">
                Область: {location.district}
              </Typography>
              <Typography variant="body2">
                Город: {location.city}
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" fontWeight="fontWeightBold">
                Цель сбора
              </Typography>
              <Typography variant="body2">
                {goalDescription}
              </Typography>
            </Box>
          </Stack>

          <Button size="small" sx={{height: "28px", width: "15%"}} variant="outlined" onClick={() => console.log('added')}>В избранное</Button>
        </Stack>
      </Card>
  )
}