import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, LinearProgress } from '@mui/material';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from './store';

interface ContributionSidebarProps {
  requestId: string;
}

export const ContributionSidebar: React.FC<ContributionSidebarProps> = ({ requestId }) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); 

  const token = useSelector((state: RootState) => state.auth.token);  

  useEffect(() => {
    const fetchData = async () => {

      if (!token) {
        setError('Токен не найден');
        setLoading(false);  
        return;
      }

      try {
        console.log(`Fetching data for requestId: ${requestId}`);  
        const response = await axios.get(`https://natticharity.eveloth.ru/api/request/${requestId}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
          timeout: 10000, 
        });

        setData(response.data);  
        setLoading(false);  
      } catch (err: any) {
        setError(err.message);
        setLoading(false); 
      }
    };

    if (requestId) {
      fetchData(); 
    } else {
      setError('No request ID provided');
      setLoading(false);
    }
  }, [requestId, token]);

  const handleContribute = () => {
    toast.success('Успех! Спасибо за помощь');
  };

  if (loading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  const collectedPercent = (data.requestGoalCurrentValue / data.requestGoal) * 100;

  return (
    <Box p={2} boxShadow={1} borderRadius={2} bgcolor="white">
      <Typography variant="h6">Вместе для добрых дел</Typography>
      <Typography variant="subtitle2">Цель сбора</Typography>
      <Typography>{data.goalDescription}</Typography>

      {/* Progress bar */}
      <Box mt={2} mb={2}>
        <LinearProgress variant="determinate" value={collectedPercent} />
        <Box display="flex" justifyContent="space-between" mt={1}>
          <Typography>{data.requestGoalCurrentValue} руб</Typography>
          <Typography>{data.requestGoal} руб</Typography>
        </Box>
      </Box>

      <Typography>Нас уже: {data.contributorsCount}</Typography>
      <Button variant="contained" fullWidth onClick={handleContribute}>Помочь</Button>
    </Box>
  );
};