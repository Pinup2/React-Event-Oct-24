import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useSelector } from 'react-redux';
import { RootState } from '../store/createStore';  
import axios from 'axios';
import { useParams } from 'react-router-dom';

const HelpRequestDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();  
  const [data, setData] = useState<any[]>([]); 
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);  

  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    const fetchData = async () => {
      console.log('Request ID:', id);  
      if (!token) {
        setError('API token is missing');
        setLoading(false); 
        return;
      }

      try {
        const response = await axios.get(`https://natticharity.eveloth.ru/api/request/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
          timeout: 10000,  
        });

        setData(response.data); 
        setLoading(false);  
      } catch (err: any) {
        console.error('API call failed:', err.response?.data || err.message);  
        setError(err.message);
        setLoading(false);  
      }
    };

    if (id) {
      fetchData();  
    } else {
      setError('No request ID provided');
      setLoading(false);
    }
  }, [id, token]);


  if (loading) {
    return <p>Loading...</p>;
  }


  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  return (
    <Box>
      {data.map((request) => (
        <Box key={request.id} mb={4}>
          <Typography variant="h4">{request.title}</Typography>
          <Typography>{request.description}</Typography>
          <Typography variant="h6">Организация</Typography>
          <Typography>{request.organization.title}</Typography>
          {request.organization.isVerified && (
            <Box display="flex" alignItems="center">
              <VerifiedIcon color="primary" />
              <Typography>Организация проверена</Typography>
            </Box>
          )}
          <Typography variant="h6">Цель</Typography>
          <Typography>{request.goalDescription}</Typography>
          <Typography variant="h6">План действий</Typography>
          <ul>
            {request.actionsSchedule.map((action: any, index: number) => (
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
      ))}
    </Box>
  );
};

export default HelpRequestDetails;