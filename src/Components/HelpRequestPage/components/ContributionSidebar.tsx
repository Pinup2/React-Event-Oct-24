import { Box, Typography, Button, LinearProgress } from '@mui/material';
import {toast} from "react-toastify";
import {calculateProgress, formatDateString} from "../../RequestCard/helpers";
import {HelpRequestI} from "../types";

interface ContributionSidebarData {
  data: HelpRequestI
}

export const ContributionSidebar = ({ data }: ContributionSidebarData) => {
  const handleContribute = () => {
    toast.success('Успех! Спасибо за помощь');
  };

  return (
    <Box p={2} boxShadow={1} borderRadius={2} bgcolor="white" style={{width: '320px'}}>
      <Typography variant="h6">Вместе для добрых дел</Typography>
      <br/>

      <Typography variant="subtitle2" fontWeight="fontWeightBold">Цель сбора</Typography>
      <Typography>{data.goalDescription}</Typography>
      <br/>

      <Typography variant="subtitle2" fontWeight="fontWeightBold">Завершение</Typography>
      <Typography variant="body2">
        {formatDateString(data.endingDate)}
      </Typography>
      <br/>

      <div style={{display: 'flex', flexDirection: 'column', gap: '4px', width: "100%"}}>
        <Typography variant="subtitle2" fontWeight="fontWeightBold">
          Мы собрали
        </Typography>
        <LinearProgress variant="determinate" value={calculateProgress(data.requestGoal, data.requestGoalCurrentValue)} />
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Typography variant="body2" color='textSecondary'>
            {data.requestGoalCurrentValue.toLocaleString('ru-RU')} руб
          </Typography>
          <Typography variant="body2" color='textSecondary'>
            {data.requestGoal.toLocaleString('ru-RU')} руб
          </Typography>
        </div>
      </div>
      <br/>
      <br/>

      <Typography variant="body2" color='textSecondary'>Нас уже: {data.contributorsCount}</Typography>
      <Button variant="contained" fullWidth onClick={handleContribute}>Помочь</Button>
    </Box>
  );
};