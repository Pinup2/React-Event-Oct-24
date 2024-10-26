import Card from '@mui/material/Card';
import {Typography} from '@mui/material';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';


import selectedButton from './assets/_IconButton_selected.svg'
import unselectedButton from './assets/_IconButton_.svg'

import styles from './styles.module.css'
import {calculateProgress, formatDateString, imageSelector} from "./helpers";

type RequestCardPropsType = {
  title: string;
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
}


export const RequestCard = ({title, organization, location, goalDescription, requesterType, helpType, endingDate, requestGoal, requestGoalCurrentValue}: RequestCardPropsType) => {
  // TODO убрать isClicked
  const isClicked = true;
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
      <Card className={styles.card}>
        <div style={{padding: '16px'}}>
          <img src={imageSelector(requesterType, helpType)} alt="card image" style={{height: '220px'}} />
          <div className={styles.titleContainer}>
            <Typography variant="h5" component="h5">
              {title}
            </Typography>
            {isClicked ? <img src={selectedButton} alt="selectedButton" style={{marginLeft: '5px'}} /> : <img src={unselectedButton} alt="unselectedButton" style={{marginLeft: '5px'}} />}
          </div>
        </div>

        <Divider orientation="horizontal" />



        <div className={styles.container}>

          <div>
            <Typography variant="subtitle2" fontWeight="fontWeightBold" style={{marginTop: '8px'}}>
              Организатор
            </Typography>
            <Typography variant="body2">
              {organization.title}
            </Typography>
            <br/>

            <Typography variant="subtitle2" fontWeight="fontWeightBold">
              Локация
            </Typography>
            <Typography variant="body2">
              Область: {location.district}
            </Typography>
            <Typography variant="body2">
              Город: {location.city}
            </Typography>
            <br/>

            <Typography variant="subtitle2" fontWeight="fontWeightBold">
              Цель сбора
            </Typography>
            <Typography variant="body2">
              {goalDescription}
            </Typography>
            <br/>

            <Typography variant="subtitle2" fontWeight="fontWeightBold">
              Завершение
            </Typography>
            <Typography variant="body2">
              {formatDateString(endingDate)}
            </Typography>
          </div>


          <div style={{display: 'flex', flexDirection: 'column', gap: '4px', width: "100%"}}>
            <Typography variant="subtitle2" fontWeight="fontWeightBold">
              Мы собрали
            </Typography>
            <LinearProgress variant="determinate" value={calculateProgress(requestGoal, requestGoalCurrentValue)} />
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <Typography variant="body2" color='textSecondary'>
                {requestGoalCurrentValue.toLocaleString('ru-RU')} руб
              </Typography>
              <Typography variant="body2" color='textSecondary'>
                {requestGoal.toLocaleString('ru-RU')} руб
              </Typography>
            </div>
          </div>

          <Button variant="contained" fullWidth>Помочь</Button>
        </div>

      </Card>
  )
}