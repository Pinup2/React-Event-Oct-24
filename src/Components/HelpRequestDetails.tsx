import React, { useEffect, useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Box, Typography } from '@mui/material';

const HelpRequestDetails: React.FC<{ id: string }> = ({ id }) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdiYzk5NDljLTc5NGYtNGUzNi1hMTJmLWMzZTlmMjE3OGRlMyIsImlhdCI6MTcyOTk2MDA4NCwiZXhwIjoxNzI5OTYzNjg0fQ._yHMS8WAz7K0P1086WLMQt126D0kOJuTTqlcffKmUtk";
      if (!token) {
        setError('API token is missing');
        return;
      }

      try {
        const response = await fetch(`https://natticharity.eveloth.ru/api/request/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
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
  }, [id]);

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <Box>
      <Typography variant="h4">{data.title}</Typography>
      <Typography>{data.description}</Typography>
      <Typography variant="h6">Организация</Typography>
      <Typography>{data.organization.title}</Typography>
      {data.organization.isVerified && (
        <Box display="flex" alignItems="center">
          <VerifiedIcon color="primary" />
          <Typography>Организация проверена</Typography>
        </Box>
      )}
      <Typography variant="h6">Цель</Typography>
      <Typography>{data.goalDescription}</Typography>
      <Typography variant="h6">План действий</Typography>
      <ul>
        {data.actionsSchedule.map((action: any, index: number) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
            {action.isDone ? (
              <CheckCircleIcon color="success" />
            ) : (
              <RadioButtonUncheckedIcon color="disabled" />
            )}
            <Typography>{action.stepLabel}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default HelpRequestDetails;