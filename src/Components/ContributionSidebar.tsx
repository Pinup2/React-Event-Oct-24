import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, LinearProgress } from '@mui/material';
import { toast } from 'react-toastify';

interface ContributionSidebarProps {
  requestId: string;
}

export const ContributionSidebar: React.FC<ContributionSidebarProps> = ({ requestId }) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      // const token = import.meta.env.REACT_APP_API_TOKEN;
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdiYzk5NDljLTc5NGYtNGUzNi1hMTJmLWMzZTlmMjE3OGRlMyIsImlhdCI6MTcyOTk2MDA4NCwiZXhwIjoxNzI5OTYzNjg0fQ._yHMS8WAz7K0P1086WLMQt126D0kOJuTTqlcffKmUtk";
    if (!token) {
      setError('Токен не найден');
      return;
    }
      try {
        const response = await fetch(`https://natticharity.eveloth.ru/api/request/${requestId }`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
          },
        });

        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных');
        }

        const result = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchData();
  }, [requestId]);

  const handleContribute = () => {
    toast.success('Успех! Спасибо за помощь');
  };

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  if (!data) {
    return <p>Загрузка...</p>;
  }

  const collectedPercent = (data.requestGoalCurrentValue / data.requestGoal) * 100;

  return (
    <Box p={2} boxShadow={1} borderRadius={2} bgcolor="white">
      <Typography variant="h6">Вместе для добрых дел</Typography>
      <Typography variant="subtitle2">Цель сбора</Typography>
      <Typography>{data.goalDescription}</Typography>

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